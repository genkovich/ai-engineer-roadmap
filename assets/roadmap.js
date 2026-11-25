/* Shared roadmap renderer: data -> absolutely positioned nodes + SVG connectors (desktop),
   stacked tree (phone), drawer with description/resources, per-node status in localStorage. */
(function(){
  'use strict';
  var STATUSES={done:'вивчено',progress:'в процесі',skip:'пропустити'};
  var TYPE_NAMES={main:'основне',topic:'тема',optional:'за потреби',alt:'один з варіантів',root:'роадмап',end:'далі'};

  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function slug(s){return String(s).toLowerCase().replace(/[^a-z0-9а-яіїєґ]+/gi,'-').replace(/^-+|-+$/g,'').slice(0,60);}

  function store(){try{return window.localStorage;}catch(e){return null;}}
  function loadStatus(key){try{var s=store();if(!s)return {};var v=s.getItem(key);return v?JSON.parse(v)||{}:{};}catch(e){return {};}}
  function saveStatus(key,obj){try{var s=store();if(s)s.setItem(key,JSON.stringify(obj));}catch(e){}}

  /* ---------- flatten + ids ---------- */
  function prepare(data){
    var all=[],seen={};
    function walk(n,level,parent){
      n.level=level;n.parent=parent;
      if(!n.id){var base=slug(n.label),id=base,i=2;while(seen[id]){id=base+'-'+(i++);}n.id=id;}
      seen[n.id]=true;
      if(!n.type)n.type=level===0?'main':'topic';
      n.children=n.children||[];
      all.push(n);
      n.children.forEach(function(c){walk(c,level+1,n);});
    }
    data.groups.forEach(function(g){walk(g,0,null);});
    data._all=all;
    return all;
  }

  /* ---------- node DOM ---------- */
  function makeNode(n,ctx){
    var isLink=n.type==='main'&&n.href&&ctx.mainIsLink;
    var e=el(isLink?'a':'button','node '+n.type+(n.level>=2?' l2':'')+(n.level===1?' l1':''));
    if(isLink){e.href=n.href;}else{e.type='button';}
    e.setAttribute('data-id',n.id);
    var inner='<span class="st" aria-hidden="true"></span>';
    if(n.kicker)inner+='<span class="kicker">'+esc(n.kicker)+'</span>';
    inner+='<span class="lbl">'+esc(n.label)+'</span>';
    if(n.items&&n.items.length)inner+='<ul class="items">'+n.items.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul>';
    if(n.go)inner+='<span class="go">'+esc(n.go)+'</span>';
    e.innerHTML=inner;
    e.addEventListener('click',function(ev){
      if(isLink)return;
      ev.preventDefault();ctx.openDrawer(n);
    });
    e.addEventListener('contextmenu',function(ev){
      if(n.type==='root'||n.type==='end'||!ctx.statusKey)return;
      ev.preventDefault();ctx.openCtx(n,ev);
    });
    return e;
  }

  /* ---------- desktop layout ---------- */
  function layoutDesktop(data,ctx,host){
    var cfg=Object.assign({mainW:244,childW:204,gchildW:178,hGap1:56,hGap2:30,vGap:34,spineGap:36,cGap:12,gGap:8,margin:14,rootGap:48},data.layout||{});
    host.innerHTML='';
    var graph=el('div','graph');host.appendChild(graph);
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');graph.appendChild(svg);

    var cx=cfg.margin+cfg.gchildW+cfg.hGap2+cfg.childW+cfg.hGap1+cfg.mainW/2;
    var W=Math.round(cx*2);
    graph.style.width=W+'px';

    /* create & measure */
    var nodes=data._all;
    var root={id:'__root',type:'root',label:data.root.label,kicker:data.root.kicker,level:-1,children:[],desc:data.root.desc,why:data.root.why,links:data.root.links};
    var endN=data.end?{id:'__end',type:'end',label:data.end.label,href:data.end.href,level:-1,children:[]}:null;
    var rootEl=makeNode(root,Object.assign({},ctx,{mainIsLink:false}));
    rootEl.style.width=(cfg.mainW+80)+'px';graph.appendChild(rootEl);
    nodes.forEach(function(n){
      n.el=makeNode(n,ctx);
      n.w=n.level===0?cfg.mainW:n.level===1?cfg.childW:cfg.gchildW;
      n.el.style.width=n.w+'px';
      graph.appendChild(n.el);
    });
    var endEl=null;
    if(endN){endEl=el('a','node end');endEl.href=endN.href;endEl.innerHTML='<span class="lbl">'+esc(endN.label)+'</span>';endEl.style.width=(cfg.mainW+80)+'px';graph.appendChild(endEl);}
    nodes.forEach(function(n){n.h=n.el.offsetHeight;});
    var rootH=rootEl.offsetHeight;

    /* subtree heights for level 1 and 2 */
    function stackH(list,gap){var s=0;list.forEach(function(c,i){s+=c.subH+(i?gap:0);});return s;}
    nodes.forEach(function(n){if(n.level===2)n.subH=n.h;});
    nodes.forEach(function(n){if(n.level===1){n.subH=Math.max(n.h,stackH(n.children,cfg.gGap));}});

    /* three cursors: spine nodes, left column, right column. Alternating groups overlap vertically,
       so the graph packs like a real roadmap instead of leaving half the width empty. */
    var ySpine=rootH+cfg.rootGap,curL=rootH+cfg.rootGap-10,curR=curL,y=ySpine;
    rootEl.style.left=(cx-(cfg.mainW+80)/2)+'px';rootEl.style.top='0px';
    var paths=[];
    var sideToggle='left';
    data.groups.forEach(function(g,gi){
      var side=g.side||(g.children.length>5?'both':sideToggle);
      if(side!=='both')sideToggle=(side==='left'?'right':'left');else sideToggle=(gi%2?'left':'right');
      var L=[],R=[];
      if(side==='both'){g.children.forEach(function(c,i){var s=c.side||(i%2?'right':'left');(s==='right'?R:L).push(c);});}
      else if(side==='left'){L=g.children.slice();}else{R=g.children.slice();}
      var hL=stackH(L,cfg.cGap),hR=stackH(R,cfg.cGap);
      var gy=ySpine+g.h/2;
      if(L.length)gy=Math.max(gy,curL+hL/2);
      if(R.length)gy=Math.max(gy,curR+hR/2);
      g.x=cx-cfg.mainW/2;g.y=gy-g.h/2;g.cy=gy;
      ySpine=gy+g.h/2+cfg.spineGap;
      if(L.length)curL=gy+hL/2+cfg.vGap;
      if(R.length)curR=gy+hR/2+cfg.vGap;
      y=Math.max(ySpine,L.length?curL:0,R.length?curR:0);
      function place(list,dir,total){
        var cy=gy-total/2;
        list.forEach(function(c){
          c.cy=cy+c.subH/2;c.y=c.cy-c.h/2;
          c.x=dir>0?cx+cfg.mainW/2+cfg.hGap1:cx-cfg.mainW/2-cfg.hGap1-c.w;
          /* connector group -> child */
          var x0=dir>0?cx+cfg.mainW/2:cx-cfg.mainW/2;
          var x1=dir>0?c.x:c.x+c.w;
          var bus=(x0+x1)/2;
          paths.push({d:'M'+x0+' '+gy+' H'+bus+' V'+c.cy+' H'+x1,cls:'l1'+(c.type==='optional'?' dash':'')});
          /* grandchildren */
          var gTotal=stackH(c.children,cfg.gGap),gy2=c.cy-gTotal/2;
          c.children.forEach(function(k){
            k.cy=gy2+k.h/2;k.y=k.cy-k.h/2;
            k.x=dir>0?c.x+c.w+cfg.hGap2:c.x-cfg.hGap2-k.w;
            var kx0=dir>0?c.x+c.w:c.x,kx1=dir>0?k.x:k.x+k.w,kb=(kx0+kx1)/2;
            paths.push({d:'M'+kx0+' '+c.cy+' H'+kb+' V'+k.cy+' H'+kx1,cls:'l2'+(k.type==='optional'?' dash':'')});
            gy2+=k.subH+cfg.gGap;
          });
          cy+=c.subH+cfg.cGap;
        });
      }
      place(L,-1,hL);place(R,1,hR);
    });
    var endY=Math.max(ySpine,curL,curR)-cfg.vGap+cfg.spineGap;
    if(endEl){endEl.style.left=(cx-(cfg.mainW+80)/2)+'px';endEl.style.top=endY+'px';y=endY+endEl.offsetHeight;}
    var H=y+cfg.margin;
    graph.style.height=H+'px';
    svg.setAttribute('width',W);svg.setAttribute('height',H);svg.setAttribute('viewBox','0 0 '+W+' '+H);

    /* spine */
    var spineEnd=endEl?endY:(endY-cfg.spineGap);
    var sp=document.createElementNS('http://www.w3.org/2000/svg','path');
    sp.setAttribute('d','M'+cx+' '+rootH+' V'+spineEnd);sp.setAttribute('class','spine');svg.appendChild(sp);
    if(!endEl){var dot=document.createElementNS('http://www.w3.org/2000/svg','circle');dot.setAttribute('cx',cx);dot.setAttribute('cy',spineEnd);dot.setAttribute('r',7);dot.setAttribute('class','end');svg.appendChild(dot);}
    paths.forEach(function(p){var e=document.createElementNS('http://www.w3.org/2000/svg','path');e.setAttribute('d',p.d);e.setAttribute('class',p.cls);svg.appendChild(e);});

    nodes.forEach(function(n){n.el.style.left=Math.round(n.x)+'px';n.el.style.top=Math.round(n.y)+'px';});
    host.style.width=W+'px';host.style.maxWidth='100%';
    return {width:W,height:H};
  }

  /* ---------- stacked (phone) ---------- */
  function layoutTree(data,ctx,host){
    host.innerHTML='';
    var r=el('div','t-root');r.innerHTML=(data.root.kicker?'<span class="kicker">'+esc(data.root.kicker)+'</span>':'')+esc(data.root.label);
    host.appendChild(r);
    var spine=el('div','t-spine');host.appendChild(spine);
    data.groups.forEach(function(g){
      var gw=el('div','t-group');
      gw.appendChild(makeNode(g,ctx));
      if(g.children.length){
        var kids=el('div','t-kids');
        g.children.forEach(function(c){
          kids.appendChild(makeNode(c,ctx));
          if(c.children.length){var kk=el('div','t-kids');c.children.forEach(function(k){kk.appendChild(makeNode(k,ctx));});kids.appendChild(kk);}
        });
        gw.appendChild(kids);
      }
      spine.appendChild(gw);
    });
    if(data.end){var e=el('div','t-end');var a=el('a','node end');a.href=data.end.href;a.innerHTML='<span class="lbl">'+esc(data.end.label)+'</span>';e.appendChild(a);spine.appendChild(e);}
  }

  /* ---------- resources grouped by type ---------- */
  var KINDS=[['doc','Документація'],['article','Стаття'],['video','Відео'],['github','GitHub'],['course','Курс/книга'],['post','Пост']];
  var KIND_NAME={};KINDS.forEach(function(k){KIND_NAME[k[0]]=k[1];});
  function domainOf(u){try{return u.replace(/^https?:\/\/(www\.)?/,'').split(/[/?#]/)[0];}catch(e){return '';}}
  function sourceOf(l){if(l.s)return l.s;var d=domainOf(l.u);if(/youtube\.com|youtu\.be/.test(d))return 'YouTube';if(/^t\.me$/.test(d))return 'Telegram';return d;}
  function renderLinks(links){
    var by={};links.forEach(function(l){var k=KIND_NAME[l.k]?l.k:'article';(by[k]=by[k]||[]).push(l);});
    var html='<h4>Де читати і дивитись <span class="cnt">'+links.length+'</span></h4><div class="res-groups">';
    KINDS.forEach(function(kk){
      var k=kk[0],list=by[k];if(!list)return;
      html+='<div class="res-group"><h5><span class="rk '+k+'">'+esc(kk[1])+'</span></h5><ul class="res">'+list.map(function(l){
        var meta=esc(sourceOf(l))+(l.y?' · '+esc(l.y):'');
        return '<li><a href="'+esc(l.u)+'" target="_blank" rel="noopener"><span class="rt">'+esc(l.t)+'</span><small>'+meta+'</small>'+(l.w?'<em>'+esc(l.w)+'</em>':'')+'</a></li>';
      }).join('')+'</ul></div>';
    });
    return html+'</div>';
  }
  window.RoadmapLinks={render:renderLinks,kinds:KINDS,sourceOf:sourceOf};

  /* ---------- drawer ---------- */
  function buildDrawer(ctx){
    var bg=el('div','drawer-bg'),d=el('aside','drawer');
    d.setAttribute('aria-label','Деталі теми');
    d.innerHTML='<div class="d-head"><h3></h3><button class="close" aria-label="Закрити">×</button></div><div class="d-body"></div>';
    document.body.appendChild(bg);document.body.appendChild(d);
    var h3=d.querySelector('h3'),body=d.querySelector('.d-body');
    function close(){d.classList.remove('open');bg.classList.remove('open');}
    bg.addEventListener('click',close);d.querySelector('.close').addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();ctx.closeCtx&&ctx.closeCtx();}});
    ctx.openDrawer=function(n){
      h3.textContent=n.label;
      var html='<div class="d-tags"><span class="tag '+n.type+'">'+esc(TYPE_NAMES[n.type]||n.type)+'</span>'+(n.parent?'<span class="tag">'+esc(n.parent.label)+'</span>':'')+'</div>';
      if(n.desc)html+='<h4>Що це</h4><p>'+esc(n.desc)+'</p>';
      if(n.why)html+='<h4>Навіщо AI-інженеру</h4><p class="why">'+esc(n.why)+'</p>';
      if(n.children&&n.children.length&&!n.items)html+='<h4>Всередині</h4><div class="d-kids">'+n.children.map(function(c){return '<span>'+esc(c.label)+'</span>';}).join('')+'</div>';
      if(n.items&&n.items.length)html+='<h4>Теми</h4><div class="d-kids">'+n.items.map(function(c){return '<span>'+esc(c)+'</span>';}).join('')+'</div>';
      if(n.links&&n.links.length)html+=renderLinks(n.links);
      if(n.href)html+='<a class="btn primary d-open" href="'+esc(n.href)+'">Відкрити роадмап навички →</a>';
      if(n.type!=='root'&&n.type!=='end'&&ctx.statusKey){
        html+='<h4>Статус</h4><div class="status">'+Object.keys(STATUSES).map(function(s){return '<button type="button" data-s="'+s+'">'+STATUSES[s]+'</button>';}).join('')+'</div><p class="hint">Статус зберігається у цьому браузері. Правий клік на вузлі дає те саме меню.</p>';
      }
      body.innerHTML=html;
      body.querySelectorAll('.status button').forEach(function(b){
        var s=b.getAttribute('data-s');
        if(ctx.status[n.id]===s)b.classList.add('on');
        b.addEventListener('click',function(){ctx.setStatus(n,ctx.status[n.id]===s?null:s);body.querySelectorAll('.status button').forEach(function(x){x.classList.toggle('on',ctx.status[n.id]===x.getAttribute('data-s'));});});
      });
      d.classList.add('open');bg.classList.add('open');body.scrollTop=0;
    };
    ctx.closeDrawer=close;
  }

  /* ---------- context menu ---------- */
  function buildCtx(ctx){
    var m=el('div','ctx');
    m.innerHTML=Object.keys(STATUSES).map(function(s){return '<button type="button" data-s="'+s+'"><i></i>'+STATUSES[s]+'</button>';}).join('')+'<button type="button" data-s=""><i style="border-style:dashed"></i>скинути</button>';
    document.body.appendChild(m);
    var cur=null;
    function close(){m.classList.remove('open');cur=null;}
    ctx.closeCtx=close;
    document.addEventListener('click',function(e){if(!m.contains(e.target))close();});
    m.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){if(cur)ctx.setStatus(cur,b.getAttribute('data-s')||null);close();});});
    ctx.openCtx=function(n,ev){
      if(!ctx.statusKey)return;
      cur=n;m.classList.add('open');
      var x=ev.pageX,y=ev.pageY;
      var mw=m.offsetWidth,mh=m.offsetHeight;
      if(x+mw>document.documentElement.scrollWidth-8)x=x-mw;
      if(y+mh>document.documentElement.scrollHeight-8)y=y-mh;
      m.style.left=x+'px';m.style.top=y+'px';
    };
  }

  /* ---------- public ---------- */
  window.Roadmap={
    render:function(data,opts){
      opts=opts||{};
      var all=prepare(data);
      var ctx={mainIsLink:!!opts.mainIsLink,statusKey:opts.statusKey||null,status:{}};
      if(ctx.statusKey)ctx.status=loadStatus(ctx.statusKey);
      var desk=document.getElementById(opts.desktopId||'graph'),tree=document.getElementById(opts.treeId||'tree');
      buildDrawer(ctx);buildCtx(ctx);

      var prog=opts.progressId?document.getElementById(opts.progressId):null;
      function applyStatus(){
        all.forEach(function(n){
          var s=ctx.status[n.id]||'';
          document.querySelectorAll('.node[data-id="'+n.id+'"]').forEach(function(e){
            if(s)e.setAttribute('data-status',s);else e.removeAttribute('data-status');
            var st=e.querySelector('.st');if(st)st.textContent=s==='done'?'✓':s==='progress'?'…':s==='skip'?'−':'';
          });
        });
        if(prog){
          var total=0,done=0,skip=0;
          all.forEach(function(n){total++;if(ctx.status[n.id]==='done')done++;else if(ctx.status[n.id]==='skip')skip++;});
          var denom=Math.max(1,total-skip),p=Math.round(done/denom*100);
          prog.querySelector('.bar i').style.width=p+'%';
          prog.querySelector('.txt').innerHTML='<b>'+done+'</b> з '+(total-skip)+' вузлів вивчено · '+p+'%'+(skip?' · пропущено '+skip:'');
        }
      }
      ctx.setStatus=function(n,s){if(s)ctx.status[n.id]=s;else delete ctx.status[n.id];saveStatus(ctx.statusKey,ctx.status);applyStatus();};
      if(prog){var rb=prog.querySelector('[data-reset]');if(rb)rb.addEventListener('click',function(){ctx.status={};saveStatus(ctx.statusKey,{});applyStatus();});}

      var mobile=window.matchMedia('(max-width:760px)');
      var deskDone=false,treeDone=false;
      function draw(){
        if(mobile.matches){if(!treeDone){layoutTree(data,ctx,tree);treeDone=true;}}
        else if(!deskDone){layoutDesktop(data,ctx,desk);deskDone=true;}
        applyStatus();
      }
      draw();
      mobile.addEventListener?mobile.addEventListener('change',draw):mobile.addListener(draw);
      if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){if(!mobile.matches){deskDone=false;draw();}});}
      return {count:all.length,ctx:ctx};
    }
  };
})();

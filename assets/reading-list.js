/* Reading list: linear numbered curriculum grouped by roadmap stage. «Прочитано» per item in localStorage. */
(function(){
  'use strict';
  var KEY='ai-roadmap:reading-list';
  var KINDS={doc:'Документація',article:'Стаття',video:'Відео',github:'GitHub',course:'Курс/книга',post:'Пост'};
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function load(){try{var v=window.localStorage.getItem(KEY);return v?JSON.parse(v)||{}:{};}catch(e){return {};}}
  function save(o){try{window.localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}}
  function domainOf(u){try{return u.replace(/^https?:\/\/(www\.)?/,'').split(/[/?#]/)[0];}catch(e){return '';}}
  function sourceOf(l){if(l.s)return l.s;var d=domainOf(l.u);if(/youtube\.com|youtu\.be/.test(d))return 'YouTube';if(/^t\.me$/.test(d))return 'Telegram';return d;}

  var data=window.READING_LIST||{stages:[]};
  var done=load();
  var host=document.getElementById('rl'),prog=document.getElementById('rl-progress'),toc=document.getElementById('rl-toc'),legend=document.getElementById('rl-legend');
  var all=[];

  /* legend */
  if(legend){
    var cnt={};data.stages.forEach(function(s){s.items.forEach(function(i){cnt[i.k]=(cnt[i.k]||0)+1;});});
    legend.innerHTML=Object.keys(KINDS).filter(function(k){return cnt[k];}).map(function(k){return '<span class="lg"><span class="rk '+k+'">'+KINDS[k]+'</span>'+cnt[k]+'</span>';}).join('')+'<span class="lg">галочка: прочитано</span>';
  }

  var num=0;
  data.stages.forEach(function(st,si){
    var sec=el('section','rl-stage');sec.id='stage-'+st.slug;
    var head=el('div','rl-head');
    head.innerHTML='<span class="rl-n">'+(si+1)+'</span><div><h2>'+esc(st.title)+'</h2>'+(st.intro?'<p>'+esc(st.intro)+'</p>':'')+'</div>'+(st.href?'<a class="btn sm" href="'+esc(st.href)+'">роадмап навички →</a>':'');
    sec.appendChild(head);
    var ol=el('ol','rl-list');
    st.items.forEach(function(it){
      num++;it._n=num;it._id=it.u;all.push(it);
      var li=el('li','rl-item');li.setAttribute('data-k',it.k);
      var src=sourceOf(it);
      li.innerHTML='<label class="rl-check"><input type="checkbox" aria-label="прочитано"><span class="box"></span></label>'+
        '<span class="rl-num">'+num+'</span>'+
        '<div class="rl-body"><a class="rl-title" href="'+esc(it.u)+'" target="_blank" rel="noopener">'+esc(it.t)+'</a>'+
        '<div class="rl-meta"><span class="rk '+esc(it.k)+'">'+esc(KINDS[it.k]||it.k)+'</span><span class="src">'+esc(src)+(it.y?' · '+esc(it.y):'')+'</span>'+(it.time?'<span class="time">'+esc(it.time)+'</span>':'')+'</div>'+
        (it.w?'<p class="rl-why">'+esc(it.w)+'</p>':'')+'</div>';
      var cb=li.querySelector('input');
      cb.checked=!!done[it._id];li.classList.toggle('done',cb.checked);
      cb.addEventListener('change',function(){if(cb.checked)done[it._id]=1;else delete done[it._id];save(done);li.classList.toggle('done',cb.checked);update();});
      ol.appendChild(li);
    });
    sec.appendChild(ol);
    host.appendChild(sec);
    st._sec=sec;
  });

  if(toc){
    toc.innerHTML=data.stages.map(function(st,i){return '<a href="#stage-'+esc(st.slug)+'"><b>'+(i+1)+'</b> '+esc(st.short||st.title)+' <small data-stage="'+esc(st.slug)+'"></small></a>';}).join('');
  }

  function update(){
    var total=all.length,d=0;all.forEach(function(i){if(done[i._id])d++;});
    var p=total?Math.round(d/total*100):0;
    prog.querySelector('.bar i').style.width=p+'%';
    prog.querySelector('.txt').innerHTML='<b>'+d+'</b> з '+total+' прочитано · '+p+'%';
    data.stages.forEach(function(st){
      var sd=0;st.items.forEach(function(i){if(done[i._id])sd++;});
      var s=toc&&toc.querySelector('small[data-stage="'+st.slug+'"]');if(s)s.textContent=sd+'/'+st.items.length;
      var h=st._sec.querySelector('.rl-head');h.classList.toggle('complete',sd===st.items.length&&st.items.length>0);
    });
  }
  var rb=prog.querySelector('[data-reset]');if(rb)rb.addEventListener('click',function(){done={};save(done);all.forEach(function(i){});host.querySelectorAll('input[type=checkbox]').forEach(function(c){c.checked=false;c.closest('li').classList.remove('done');});update();});
  update();
})();

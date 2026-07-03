(function(){
  'use strict';
  var year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  var row1=['Exhibition Stands','Corporate Events','Conference Production','Visual Displays'];
  var row2=['Branding','Advertising Solutions','Project Management','A–Z Delivery'];
  function build(id,items){var el=document.getElementById(id); if(!el)return; items.concat(items).forEach(function(t){var s=document.createElement('span'); s.className='pill'; s.textContent=t; el.appendChild(s);});}
  build('marquee-row-1',row1); build('marquee-row-2',row2);
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target);}});},{threshold:.12});items.forEach(function(i){obs.observe(i);});}else{items.forEach(function(i){i.classList.add('is-visible');});}
})();

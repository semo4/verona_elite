function setLang(lang){
  document.documentElement.setAttribute('lang', lang);
  var enBtn = document.getElementById('btn-en');
  var ruBtn = document.getElementById('btn-ru');
  if(enBtn) enBtn.classList.toggle('active', lang==='en');
  if(ruBtn) ruBtn.classList.toggle('active', lang==='ru');
  try{ localStorage.setItem('vh_lang', lang); }catch(e){}
}
(function(){
  var saved = 'en';
  try{ saved = localStorage.getItem('vh_lang') || 'en'; }catch(e){}
  document.addEventListener('DOMContentLoaded', function(){ setLang(saved); });
})();

function setLang(lang){
  document.documentElement.setAttribute('lang', lang);
  var enBtn = document.getElementById('btn-en');
  var ruBtn = document.getElementById('btn-ru');
  if(enBtn) enBtn.classList.toggle('active', lang==='en');
  if(ruBtn) ruBtn.classList.toggle('active', lang==='ru');
  try{ localStorage.setItem('vh_lang', lang); }catch(e){}
}

function toggleMenu(){
  var header = document.querySelector('header');
  if(header) header.classList.toggle('nav-open');
}

(function(){
  var saved = 'en';
  try{ saved = localStorage.getItem('vh_lang') || 'en'; }catch(e){}
  document.addEventListener('DOMContentLoaded', function(){
    setLang(saved);

    // Close the mobile menu when a nav link is tapped
    var header = document.querySelector('header');
    var navLinks = document.querySelectorAll('nav a');
    for(var i=0; i<navLinks.length; i++){
      navLinks[i].addEventListener('click', function(){
        if(header) header.classList.remove('nav-open');
      });
    }

    // Subtle shadow on the sticky header once the page is scrolled
    var onScroll = function(){
      if(!header) return;
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  });
})();

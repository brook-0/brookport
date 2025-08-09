
// Smooth page leave animation for link clicks
document.addEventListener('DOMContentLoaded', function(){
  // add click listeners to internal links
  document.querySelectorAll('a[href]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith('.html')){
      a.addEventListener('click', function(e){
        // allow ctrl/cmd clicks
        if(e.ctrlKey || e.metaKey) return;
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(()=>{ window.location = href; }, 380);
      });
    }
  });
});

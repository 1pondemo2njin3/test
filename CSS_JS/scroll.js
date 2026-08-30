
const scrollToTopBtn = document.querySelector('#scroll-to-top');
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0, // トップの位置 //
    behavior: 'smooth' // 動きを スムーズ //
  });
});



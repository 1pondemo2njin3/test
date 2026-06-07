
const banner = document.querySelector('.floating-banner'); // バナー要素
const section = document.querySelector('.section'); // セクション要素

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY; // 現在のスクロール位置
  const sectionTop = section.offsetTop; // セクションの上部位置
  const sectionHeight = section.offsetHeight; // セクションの高さ
  const sectionMiddle = sectionTop + sectionHeight / 2; // セクションの中央位置

  // スクロール位置がセクションの中央に到達したらバナーを表示
  if (scrollY >= sectionMiddle - 100 && scrollY < sectionMiddle + 100) {
      banner.style.opacity = 1; // バナーを表示
  } else {
      banner.style.opacity = 0; // バナーを非表示
  }
});
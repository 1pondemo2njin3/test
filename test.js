const banner = document.getElementById('floatingBanner');
const closeBtn = document.getElementById('bannerClose');

const SHOW_SCROLL_Y = 200; // 表示開始位置
const FOOTER_MARGIN = 120; // 下部に近づいたら避ける距離

let manuallyClosed = false;

window.addEventListener('scroll', () => {
  if (manuallyClosed) return;

  const y = window.scrollY;
  const docHeight = document.body.scrollHeight;
  const winHeight = window.innerHeight;

  // ▼ フェードイン / アウト
  if (y > SHOW_SCROLL_Y) {
    banner.classList.add('is-visible');
  } else {
    banner.classList.remove('is-visible');
  }

  // ▼ ページ下部に近づいたらバナーを少し上に避ける
  const bottomDistance = docHeight - (y + winHeight);

  if (bottomDistance < FOOTER_MARGIN) {
    banner.style.bottom = `${FOOTER_MARGIN - bottomDistance + 20}px`;
  } else {
    banner.style.bottom = "20px";
  }
});

// 閉じるボタン
closeBtn.addEventListener('click', () => {
  manuallyClosed = true;
  banner.classList.remove('is-visible');
});

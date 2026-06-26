
const swiper = new Swiper(".swiper", {
    breakpoints: {
        1220: {slidesPerView: 5,},
        990: {slidesPerView: 4,},
        640: {slidesPerView: 3,},}, // 画像が重なる原因 *数字が合ってない場合あり

    slidesPerView: 3,       // 同時に表示するスライド数 *設定値の2倍以上のスライドを用意
    spaceBetween: 3,        // スライド間の余白
    speed: 5000,            // 移動速度(ms)
    loop: true,             // 無限ループ
    autoplay: {delay: 0,},  // 途切れない動きに必須
    });

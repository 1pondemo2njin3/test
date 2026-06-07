
const swiper = new Swiper(".swiper", {
    loop: true,             // 無限ループ
    slidesPerView: 4,       // 同時に表示するスライド数 *設定値の2倍以上のスライドを用意
    breakpoints: {
        1125: {slidesPerView: 5,},
        975: {slidesPerView: 4,},
        760: {slidesPerView: 3,}}, // タブレットでは2枚 スマホでは1枚
    spaceBetween: 5,        // スライド間の余白
    speed: 5000,            // 移動速度(ms)
    autoplay: {delay: 0,},  // 途切れない動きに必須       
    });


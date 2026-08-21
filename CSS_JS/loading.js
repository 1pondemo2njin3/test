
// 読み込みが完了したときに非表示にする
window.onload = function () {
    const spinner = document.getElementById('load');
    spinner.classList.add('loaded');
    };


    
// 戻るボタンで ローディング画面のまま動かない対策として
// ページ遷移した時に強制的にページを読み込ませる
window.onpageshow = function (event) {
    if (event.persisted) {window.location.reload();}
    };

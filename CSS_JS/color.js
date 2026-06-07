
/* RGB形式をHEX形式に変換する関数 */
function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  if (!result || result.length < 3) return null;
  return "#" + result
      .slice(0, 3)
      .map(num => {const hex = parseInt(num, 10).toString(16).padStart(2, "0"); return hex;})
      .join("");}

// 全ての色ボタンにクリックイベントを付与
document.querySelectorAll(".color-btn").forEach(button => {
  button.addEventListener("click", () => {
      // ボタンの背景色を取得（RGB形式）
      const bgColor = window.getComputedStyle(button).backgroundColor;
      // HEX形式に変換
      const hexColor = rgbToHex(bgColor);

      if (hexColor) {
          // クリップボードにコピー
          navigator.clipboard.writeText(hexColor)
          .then(() => {alert(`カラーコード ${hexColor} をコピーしました！`);})
          .catch(err => {console.error("コピーに失敗しました:", err);});}
  });
});



 // カラーコードの配列（例）
 const colors = [
  "#F0ED41", "#F8DB55", "#FFC845", "#FF9D47", "#F57D38", "#EA504A", 
  "#F37F96", "#FA7395", "#FD66C4", "#EE6DCB", "#D85081", "#E73472", "#B52542", "#B03D81", "#75358C", "#A26FAF", "#907594", 
  "#8F8AF7", "#384A86", "#4146B8", "#3376D2", "#69A9E9", "#5ABAE6", "#5FCCF7", "#3DD1D7", 
  "#00B5BE", "#64C3C1", "#00C7B1", "#19B49E", "#6CCF92", "#4BD18C", "#28A959", "#5F9B26", "#1C7763", 
  "#3C5161", "#5A6065", "#494541", "#583D3E", "#865432", "#AF7E51", 
  "#FE8B64", "#FFDA93", "#F1EB9D", "#F3F19D", "#FFDEF9", "#DFC8E7", "#C8D8EB", "#ECE7E7", 
  ];

const palette = document.getElementById("palette");

// カラーボックスを生成
colors.forEach(color => {
  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;

  const label = document.createElement("div");
  label.className = "color-label";
  label.textContent = color;

  box.appendChild(label);
  palette.appendChild(box);

  // クリックでカラーコードをコピー
  box.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(color);
      label.textContent = `${color} ✓`; // コピー成功表示
      setTimeout(() => label.textContent = color, 1000);
    } catch (err) {
      alert("コピーに失敗しました: " + err);
    }
  });
});



const picker = document.getElementById('colorPicker');
const code = document.getElementById('colorCode');
const preview = document.getElementById('colorPreview');
const copyBtn = document.getElementById('copyBtn');

// カラー選択時の処理
picker.addEventListener('input', () => {
    const color = picker.value;
    code.textContent = color;
    preview.style.backgroundColor = color;
});

// コピー処理
copyBtn.addEventListener('click', () => {
    const text = code.textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert(`カラーコード ${text} をコピーしました！`))
        .catch(err => alert('コピーに失敗しました: ' + err));
});
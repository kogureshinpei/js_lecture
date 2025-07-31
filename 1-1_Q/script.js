// step1 変数を定義しよう

//step2 　child_divをクリックしらたら背景の色が変わるようにしよう

child_div.addEventListener("click", function () {
  // 変数parentの背景色をlightblueに変更
});

// step3 child_pをクリックしたら背景の色が元に戻るようにしよう

// step4 child_ppをクリックしたら100*100pxの赤い四角が表示されるようにしよう
child_pp.addEventListener("click", () => {
  const redSquare = document.createElement("div");
  // 赤い四角の幅と高さを設定
  // 赤い四角の背景色を設定
  // parentに赤い四角を追加
});

// step5 赤い四角にカーソルを合わせたら回転するようにしよう
parent.addEventListener("mouseover", function (event) {
  if (event.target.style.backgroundColor === "red") {
    // 赤い四角のスタイルを設定して回転させる
  }
});

// step6 赤い四角をクリックしたら消えるようにしよう

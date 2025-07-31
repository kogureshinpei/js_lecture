// step1 変数を定義しよう
const parent = document.querySelector(".parent");
const child_div = document.querySelector(".child_div");
const child_p = document.querySelector(".child_p");
const child_pp = document.querySelector(".child_pp");

//step2 　child_divをクリックしらたら背景の色が変わるようにしよう

child_div.addEventListener("click", function () {
  parent.style.backgroundColor = "lightblue";
});

// step3 child_pをクリックしたら背景の色が元に戻るようにしよう
child_p.addEventListener("click", function () {
  parent.style.backgroundColor = "white";
});

// step4 child_ppをクリックしたら100*100pxの赤い四角が表示されるようにしよう
child_pp.addEventListener("click", () => {
  const redSquare = document.createElement("div");
  redSquare.style.width = "100px";
  redSquare.style.height = "100px";
  redSquare.style.backgroundColor = "red";
  parent.appendChild(redSquare);
});

// step5 赤い四角にカーソルを合わせたら回転するようにしよう
parent.addEventListener("mouseover", function (event) {
  if (event.target.style.backgroundColor === "red") {
    event.target.style.transition = "transform 0.5s";
    event.target.style.transform = "rotate(360deg)";
  }
});

// step6 赤い四角をクリックしたら消えるようにしよう
parent.addEventListener("click", function (event) {
  if (event.target.style.backgroundColor === "red") {
    event.target.remove();
  }
});

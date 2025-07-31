const one = document.querySelector(".button_1");
const two = document.querySelector(".button_2");
const three = document.querySelector(".button_3");
const four = document.querySelector(".button_4");
const five = document.querySelector(".button_5");
// const reset = document.querySelector(".reset");　五種類作る必要がありそう
const parent = document.querySelector(".parent");
const head = document.querySelector(".head");
const right_arm = document.querySelector(".right_arm");
const left_arm = document.querySelector(".left_arm");
const right_leg = document.querySelector("right_leg");
const left_leg = document.querySelector("left_leg");

one.addEventListener("click", () => {
  parent.style.transform = "translateX(800px)";
  parent.style.transition = "transform 1s";
});

two.addEventListener("click", () => {
  const copy_head = document.createElement("span");
  copy_head.className = "head";
  copy_head.style.transform = "translateX(800px)";
  parent.appendChild(copy_head);

  const copy_right_arm = document.createElement("span");
  copy_right_arm.className = "right_arm";
  copy_right_arm.style.transform = "translateX(800px) rotate(-45deg)";
  parent.appendChild(copy_right_arm);

  const copy_left_arm = document.createElement("span");
  copy_left_arm.className = "left_arm";
  copy_left_arm.style.transform = "translateX(800px) rotate(45deg)";
  parent.appendChild(copy_left_arm);

  const copy_right_leg = document.createElement("span");
  copy_right_leg.className = "right_leg";
  copy_right_leg.style.transform = "translateX(800px) rotate(45deg)";
  parent.appendChild(copy_right_leg);

  const copy_left_leg = document.createElement("span");
  copy_left_leg.className = "left_leg";
  copy_left_leg.style.transform = "translateX(800px) rotate(-45deg)";
  parent.appendChild(copy_left_leg);

  const copy_body = document.createElement("span");
  copy_body.className = "body";
  copy_body.style.transform = "translateX(800px)";
  parent.appendChild(copy_body);
});

three.addEventListener("click", () => {
  head.style.transform = "translateX(-800px)";
  head.style.transition = "transform 5s";
  head.style.transitionDelay = "3s";

  const new_head = document.createElement("span");
  new_head.className = "new_head";
  new_head.style.display = "inline";
  new_head.style.transition = "transform 5s";
  parent.appendChild(new_head);

  setTimeout(() => {
    new_head.style.transform = "translateX(-1800px)";
  }, 0);
});

four.addEventListener("click", () => {
  parent.style.transform = "translateX(800px) rotate(360deg)";
  parent.style.transition = "transform 2s";
});

five.addEventListener("click", () => {
  const main = document.querySelector(".main");
  const border = document.createElement("div");
  border.className = "border";
  border.innerText = "壁";
  border.style.fontSize = "80px";
  main.appendChild(border);

  parent.style.transform = "translateX(500px)";
  parent.style.transition = "transform 2s";
  setTimeout(() => {
    parent.style.transform = "translateY(500px) rotate(-90deg)";
    parent.style.transition = "transform 2s";
  }, 2000);
  setTimeout(() => {
    parent.style.transition = "opacity 2s";
    parent.style.opacity = "0";

    comment_1.style.transition = "opacity 2s";
    comment_1.style.opacity = "0";
  }, 4000);
  setTimeout(() => {
    const copy_head_2 = document.createElement("span");
    copy_head_2.className = "head";
    copy_head_2.style.opacity = "1";
    copy_head_2.transition = "opacity 2s";
    // copy_head.style.transform = "translateX(800px)";
    main.appendChild(copy_head_2);

    const copy_right_arm_2 = document.createElement("span");
    copy_right_arm_2.className = "right_arm";
    copy_right_arm_2.style.opacity = "1";
    copy_right_arm_2.transition = "opacity 2s";
    // copy_right_arm.style.transform = "translateX(800px) rotate(-45deg)";
    main.appendChild(copy_right_arm_2);

    const copy_left_arm_2 = document.createElement("span");
    copy_left_arm_2.className = "left_arm";
    copy_left_arm_2.style.opacity = "1";
    copy_left_arm_2.transition = "opacity 2s";
    // copy_left_arm.style.transform = "translateX(800px) rotate(45deg)";
    main.appendChild(copy_left_arm_2);

    const copy_right_leg_2 = document.createElement("span");
    copy_right_leg_2.className = "right_leg";
    copy_right_leg_2.style.opacity = "1";
    copy_right_leg_2.transition = "opacity 2s";
    // copy_right_leg.style.transform = "translateX(800px) rotate(45deg)";
    main.appendChild(copy_right_leg_2);

    const copy_left_leg_2 = document.createElement("span");
    copy_left_leg_2.className = "left_leg";
    copy_left_leg_2.style.opacity = "1";
    copy_left_leg_2.transition = "opacity 2s";
    // copy_left_leg.style.transform = "translateX(800px) rotate(-45deg)";
    main.appendChild(copy_left_leg_2);

    const copy_body_2 = document.createElement("span");
    copy_body_2.className = "body";
    copy_body_2.style.opacity = "1";
    copy_body_2.transition = "opacity 2s";
    // copy_body.style.transform = "translateX(800px)";
    main.appendChild(copy_body_2);
  }, 6000);
  setTimeout(() => {
    const comment_2 = document.createElement("p");
    comment_2.innerText = "生き返ったー";
    comment_2.style.fontSize = "80px";
    comment_2.style.marginLeft = "420px";
    comment_2.style.paddingTop = "200px";
    main.appendChild(comment_2);
  }, 8000);
});

///////////////////////////////////
//슬라이딩 구현

setInterval(function () {
  let tg = document.querySelector(".slide");
  //대상의 top값이 -100%로 0.6초동안 transition이 발생
  tg.style.top = "-100%";

  tg.style.transition = "0.6s";

  setTimeout(function () {
    console.log(tg.querySelectorAll("li").length);
    let first = tg.querySelectorAll("li")[0];
    console.log(`first:${first}`);
    tg.appendChild(first);
    //대상의 top의 값이 0으로 이동
    tg.style.top = "0";
    //transition 없애기
    tg.style.transition = "none";
  }, 600); // 0.06초
}, 3000); // 3초

/*
[문서 객체에 이벤트를 적용하는 방법]
요소선택.이벤트종류 = function(){실행할 문장};
btn.onclick = process; => 이벤트가 발생했을 때 실행할 함수 등록 (실행보다는 등록의 개념)
function process() {};
*/

let chk = true;
let btn = document.getElementsByTagName("button")[0];
btn.onclick = process;

function process() {
  let divNode = document.getElementsByTagName("div")[0];
  if (chk) {
    divNode.style.backgroundColor = "skyblue";
    chk = false;
  } else {
    divNode.style.backgroundColor = "orange";
    chk = true;
  }
}

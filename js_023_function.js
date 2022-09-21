//js_023_function.js

/*
[출력결과]
홍길동님은 회원입니다.
3000포인트가 적립되었습니다.
*/

//회원여부
function process(name, chk) {
  if (chk) {
    console.log(`${name}님은 회원입니다.`);
  } else {
    console.log(`${name}님은 비회원입니다.`);
  }
}

//포인트 적립
function pointPlus(point) {
  console.log(`${point}포인트가 적립되었습니다.`);
}

process("홍길동", true);
pointPlus(3000);

//////////////////////////////////////////////////////////////////////

/*
[출력결과]
요소의 길이 : 4
2인덱스 요소값 가져오기 : v
*/

//배열의 길이 리턴
function length(data) {
  return data.length;
}

//배열에서 특정 인덱스의 요소 리턴
function charAt(data, index) {
  return data[index];
}

let arr = ["j", "a", "v", "A"];
console.log(`요소의 길이: ${length(arr)}`);
console.log(`2인덱스 요소값 가져오기: ${charAt(arr, 2)}`);

// function length(arr) {
//   console.log(`요소의 길이: ${arr.length}`);
// }

// function charAt(arr, index) {
//   console.log(`2인덱스 요소값 가져오기: ${arr[index]}`);
// }

// length(arr);
// charAt(arr, 2);

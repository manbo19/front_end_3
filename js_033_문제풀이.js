/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.
-> 1,2,3,4,5에 대해서만 평균 내기

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3


const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});

console.log(`res : ${res}`); //res : 8,18,32,50

const sqt = numbers.map(Math.sqrt); //다른 객체에서 지정해놓은 함수도 사용할 수 있음
console.log(`sqt : ${sqt}`); //sqt : 2,3,4,5

//reduce()는 하나의 결과값으로 리턴해줌
function getSum(total, num) {
  // total: 누적, num:요소
  return total + num;
}

const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`); //sum : 54


*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
const res = arr.map(function (element, index) {
  return element;
});

console.log(`res : ${res}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/

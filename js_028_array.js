//js_028_array.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

let scores = [100, 90, 100];
console.log(scores); //[ 100, 90, 100 ] Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ["john", "Doe", 26, true];
/*
[출력결과]
john string
Doe string
26 number
true boolean
*/
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ["홍길동", [100, 90, 100]]; //배열 안에 또 다른 배열을 집어넣는 것이 가능함. 객체를 넣는 것도 가능함
/*
홍길동 string
[ 100, 90, 100 ] object
*/
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let cars = new Array("Sasb", "Volvo", "BMW"); //cars=[]
/*
Sasb string
Volvo string
BMW string
*/
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length); //0
color[0] = "red";
console.log(color.length); //1
color.push("green"); //현재 들어간 다음 인덱스부터 넣어줌
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = "blue";
console.log(color.length); //9
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ] [ 'red', 'green', 759, empty x 5, 'blue' ]
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3); // 숫자가 요소의 개수로 인식이 됨 -> 3개가 만들어짐(0, 1, 2)
console.log(`point length: ${point.length}`); //point length: 3

//2개의 요소를 가진 배열을 생성(각각 10과 20이 들어감)
let shape = new Array(10, 20);
console.log(shape.length); //2
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`); //0 : 10  1 : 20
}

shape[2] = 50; //추가
console.log(shape[1]); //요소 가져오기
console.log(shape.length); // 개수 조회

/*
for()
for ~ in ; : index 
for ~ of : element
*/

//forEach() : 배열에서 정의해놓은 전용 메소드(객체에서는 사용하면 안 됨). 주어진 함수를 배열 요소 각각에 대해 실행
//배열.forEach(function(element[, index]){수행할 문장}); -> []: 생략이 가능하다는 말임!
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});

//↳ Arrow 함수로 바꿨을 때(결과는 똑같음)
shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

let choice = "javascript";
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });

//배열명.map(callback); -> 요소에 있는 개수 그대로 리턴됨
//                         배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
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
// 위랑 똑같음~
// const sum = numbers.reduce(function getSum(total, num) {
//   // total: 누적, num:요소
//   return total + num;
// });

const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18; //논리값!!!!이 true인 것만 리턴해줌(조건이 맞는 것만 리턴~~)
});

console.log(`per : ${per}`); //per : 32,33,40

/*
꼬옥... 기억해주면 되...

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
*/

//js_022_function.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions

//함수(function): 특정 기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할 때 사용하는 문법이다.

/*
 함수 정의
 (1) 함수 선언문
 function 함수명(매개변수){
     실행문;
     retuen 값;
 }

 (2) 함수 표현식
 let test = function(매개변수){
    실행문;
    return 값;
 }

*/

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? "윤년" : "평년";
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`);
}

//함수 정의
//                  year: parameter(매개변수)
function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check; // return값은 무조건 하나...
}

//함수 호출
year = 2013;
let result = isLeapYear(year); //year: argument(인수)
console.log(result);
if (result) {
  console.log(`${year}년도는 윤년입니다.`);
} else {
  console.log(`${year}년도는 평년입니다.`);
}

//함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b; // + : (1)산술기호 (2)문자열 연결
}

function add2(a, b, c) {
  return a + b + c;
}

//함수 호출
console.log(add(2, 3)); //5
console.log(add2(2, 3, 4)); //9
console.log(add()); //NaN(Not a Number)
console.log(add(1)); //NaN
console.log(add(1, "script")); //1script
console.log(add(1, null)); //1
console.log(add(1, 2, 3, 4, 5)); //3
// console.log(add3()); //ReferenceError: add3 is not defined
// add(5, 7);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello("홍길동");
console.log(hello("고수")); //변수를 선언하고 값을 할당하지 않은 경우 undefined

///////////////////////////////////////////////////////////////////////////////
//함수 표현식

//ES5 - 익명함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); //[Function: sum]
console.log(sum(10, 20)); //30

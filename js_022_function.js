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

 (3) 즉시실행(익명함수) -> 일회성이어요
     (function(param){
        console.log(`${param} run~~~`);
     })('test');
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

let hap = function (a, b) {
  console.log(a + b);
};

console.log(hap); //[Function: hap]
console.log(hap(10, 30)); //undefined
hap(10, 30); //40

//ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};

console.log(sub); //[Function: sub]
console.log(sub(3, 5)); //8

let call = (a, b) => {
  console.log(a + b);
};

console.log(call); //[Function: call]
console.log(call(3, 4)); //undefined
call(3, 4); //7

// let call2 = (a) => {
//   return a;
// };

// parameter(매개 변수)가 한 개이면 소괄호() 생략이 가능하다.
// return하는 문장만 실행문에 있으면 중괄호{}와 함께 return은 반드시 생략해야 한다. 있으면~~~
// 생략하려면 다같이 하도록 하쇼 안 그러면 오류가 뜹니다요
let call2 = (a) => a;

console.log(call2); //[Function: call2]
console.log(call2(3)); //3

//매개 변수가 없으면 소괄호() 생략이 불가능하다. 반드시 기입~~~!
let call3 = () => console.log("로그인해주세요.");

console.log(call3); //[Function: call3]
console.log(call3()); //undefined
call3(); //로그인해주세요.

///////////////////////////////////////////////////////////////////
// 다양한 함수 구조

// 중첩함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3));

// 콜백함수
// 1. 다른 함수의 인수로 사용되는 함수
// 2. 어떤 이벤트에 의해 호출되는 함수: btn.onclick = function(){}
function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`==: ${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));

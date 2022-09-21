//js_020_문제풀이.js
console.log("=====문제1=====");
/*
[문제1]
  num변수의 값이 10의 배수이면 1을 아니면 0을 
   리턴하는 프로그램을 구현하시오.
  [실행결과]
   1 or 0
 */

// let num = -10;
// if (num % 10 == 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }

let num = 10;
let bit = num % 10 == 0 ? 1 : 0;
console.log(bit);

console.log("=====문제2=====");
/*
     [문제2]
   1  사과를 담는데 필요한 바구니의 수를 구하는 코드이다. 
   2  만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
      13개의 바구니가 필요하다
      
   3  [실행결과]
       필요한 바구니의 수 : 13
    */
let numOfApple = 123; //사과의 수
let sizeOfBucket = 10; //하나의 바구니에 담는 사과수
let numOfBucket; //필요한 바구니 수

numOfBucket =
  numOfApple % sizeOfBucket == 0
    ? parseInt(numOfApple / sizeOfBucket)
    : parseInt(numOfApple / sizeOfBucket) + 1;
console.log(`필요한 바구니의 수 : ${numOfBucket}`);

// let apple = 123;
// let basket = "";
// if (apple / 10 <= 1) {
//   basket = 1;
// } else if (apple / 10 <= 2) {
//   basket = 2;
// } else if (apple / 10 <= 3) {
//   basket = 3;
// } else if (apple / 10 <= 4) {
//   basket = 4;
// } else if (apple / 10 <= 5) {
//   basket = 5;
// } else if (apple / 10 <= 6) {
//   basket = 6;
// } else if (apple / 10 <= 7) {
//   basket = 7;
// } else if (apple / 10 <= 8) {
//   basket = 8;
// } else if (apple / 10 <= 9) {
//   basket = 9;
// } else if (apple / 10 <= 10) {
//   basket = 10;
// } else if (apple / 10 <= 11) {
//   basket = 11;
// } else if (apple / 10 <= 12) {
//   basket = 12;
// } else {
//   basket = 13;
// }

// console.log(`필요한 바구니의 수 : ${basket}`);

console.log("=====문제3=====");
/*
     [문제3]
     switch~case문을 이용해서 차량5부제 프로그램을 구현하시오.
     
     1. 차량의 끝번호가 아래에 해당하면 해당 요일은 차량운행을 제한한다.
     
        1,6 = 월요일 1
        2,7 = 화요일 2
        3,8 = 수요일 3
        4,9 = 목요일 4
        5,0 = 금요일 5
        
     2. 출력결과
            차량번호의 끝자리가 5인 차량은 금요일 운행을 제한합니다.
    */
let carNumber = 5;
let day;

switch (carNumber) {
  case 1:
  case 6:
    day = "월요일";
    break;
  case 2:
  case 7:
    day = "화요일";
    break;
  case 3:
  case 8:
    day = "수요일";
    break;
  case 4:
  case 9:
    day = "목요일";
    break;
  case 5:
  case 0:
    day = "금요일";
    break;
}

console.log(
  `차량번호의 끝자리가 ${carNumber}인 차량은 ${day} 운행을 제한합니다.`
);

// let car = 5;
// let day = "";
// // console.log(car % 6);
// switch (car % 6) {
//   case 1:
//     day = "월";
//     break;
//   case 2:
//     day = "화";
//     break;
//   case 3:
//     day = "수";
//     break;
//   case 4:
//     day = "목";
//     break;
//   case 5:
//     day = "금";
//     break;
// }
// console.log(
//   `차량번호의 끝자리가 ${car}인 차량은 ${day}요일 운행을 제한합니다.`
// );
console.log("=====문제4=====");
/*
    [문제4] 
     2001부터 2012년사이에서 윤년을 구하시오.
     윤년의 조건 => year%4==0 , year%100!=0 year%400==0
     1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
     2) 년도를 400로 나눈 나머지가 0이다.
    * 
     [출력결과]
      2004
     2008
     2012
    */

let year = 2012;
for (let year = 2001; year <= 2012; year++) {
  let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  let yearData = leapYearCheck ? "윤년" : "평년";
  if (leapYearCheck) {
    console.log(`${year}`);
  }
}

// let year;
// if (year % 4 == 0) {
//   console.log(year);
// } else if (year % 100 != 0) {
//   console.log(year);
// } else if (year % 400 == 0) {
//   console.log(year);
// } else {
//   console.log(year);
// }

console.log("=====문제5=====");
/*  
    [문제5]
    * 1 10=2x+3y의 해를 구하시오.
    *   x와y의 범위 : 0<=x<=10,  0<=y<=10
    *   
    * 2 출력결과
    *  x=2, y=2
    *  x=5, y=0
    */

for (let x = 0; x <= 10; x++) {
  for (let y = 0; y <= 10; y++) {
    if (10 == 2 * x + 3 * y) {
      process.stderr.write(`x=${x}, y=${y}\n`);
    }
  }
}

// let x, y;
// let sum = 0;
// sum = 2 * x + 3 * y;
// for (let x = 0; x <= 10; x++) {
//   for (let y = 0; y <= 10; y++) {
//     console.log(`sum=${sum}`);
//   }
// }

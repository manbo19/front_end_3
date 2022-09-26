// js_034_Date.js

let date = new Date();
//2022-09-26T01:10:16.573Z -> node.js(자바스크립트의 서버 기능을 해줌)
//Mon Sep 26 2022 10:15:25 GMT+0900 (한국 표준시) -> 웹 브라우저
console.log(date);

console.log(date.getFullYear()); //연도
console.log(date.getMonth() + 1); //월
console.log(date.getDate()); //일
console.log(date.getDay()); //요일 0일요일 6토요일

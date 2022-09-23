//js_032_Math.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림(자릿수를 지정할 수 없음)
//Math.round() 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/round
console.log(Math.round(25.3555)); //25
console.log(Math.round(25.3555, 1)); //25

//올림
console.log(Math.ceil(23.344)); //24

//버림
console.log(Math.floor(23.56)); //23

//난수(임의의 값) => 0.0이상 1.0미만(실행할 때마다 바뀜)
console.log(Math.random());

//반올림(자릿수 지정할 수 있음)
//toFixed()
console.log((25.523).toFixed(2)); //25.52
console.log((25.526).toFixed(2)); //25.53

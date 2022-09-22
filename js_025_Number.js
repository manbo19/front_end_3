//js_025_Number.js

let data = 10;
let fData = Number(data); //10
let nObj = new Number(data); //Number -> 객체는 Object() 생성자 또는 객체 초기자 / 리터럴 구문를 통해 생성

console.log(`data=${typeof data}`); //number
console.log(`fData=${typeof fData}`); //number
console.log(`nObj=${typeof nObj}`); //object

console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); //number+number = 20
console.log(data + nObj); //number+object = 20 (객체에 저장되어 있는 값을 가지고 와서 처리함 그래서 똑같이 나옴)

//내부에서 Number(number 타입의 객체) -> number(기본 타입)로 바뀜 그래서 ↑ 이게 되는 거임~~~
//        object                     -> primitive
// ↳ valueOf(): object -> primitive (valueOf라는 method가 객체를 기본타입으로 바꿔줌)
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String("javascript").valueOf()); //string

//표준내장객체 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

console.log(parseInt("10")); //10

//1.  let val = "10.0";
//2.  let val = "10.3";
//3.  let val = "A";
//4.  let val = "10A";
//5.
let val = "A10";
console.log(val + val); //1010 -> 문자니까!

//Number(), parseInt()
console.log(Number(val) + Number(val)); // 1. 20 / 2. 20.6 -> 실수값 그대로 계산 / 3. NaN / 4. NaN / 5. NaN
console.log(parseInt(val) + parseInt(val)); // 1.20 / 2. 20 -> 정수로 바꿔서 계산 /3. NaN / 4. 20 / 5. NaN
console.log(parseFloat(val) + parseFloat(val)); // 1.20 / 2. 20.6 /3. NaN / 4. 20 / 5. NaN

console.log(Number.POSITIVE_INFINITY); //Infinity(무한대값)
console.log(Number.NaN); //NaN

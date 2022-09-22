//js_025_Number.js

let data = 10;
let fData = Number(data); //10
let nObj = new Number(data); //Number 객체 생성 (내부객체, 내장객체)

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

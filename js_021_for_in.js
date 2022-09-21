//js_021_for_in.js

//  배열명      0       1       2    <= 인덱스값(element요소라고 부름)이 주어짐(0부터)
let color = ["red", "green", "blue"];
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue
console.log(color[3]); //undefined

//length: 요소의 개수 리턴
console.log(color.length); //3

for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}

//배열에 'black' 요소 추가
color[3] = "black";
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//객체 리터럴: {property: value, property: value}
//java: element를 가져옴         => for(String element : city){}
//javascript: index를 가져옴     => for(let idx in city){}
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }

console.log(obj.a); //객체를 불러올 때는 .이름
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  //console.log(prop);
  //console.log(obj[prop]);
  console.log(`${prop}:${obj[prop]}`); //a:1
  //console.log(`${prop}:${obj.prop}`); //a:undefined
}

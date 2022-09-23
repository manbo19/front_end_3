//js_031_destructuring.js

// Destructuring(구조 분해 할당)
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
// : Destructuring(디스트럭처링)은 structuring(구조화)된 배열 또는 객체를 Destructuring(비구조화)하여
//   개별적으로 변수에 할당하는 개념이다.

//  1. 배열 Destructuring (구조 분해 할당)
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); //a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); //c=5, d=10

let m, n;
[n, m] = [c, d];
console.log(`n=${n}, m=${m}`); //n=5, m=10

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //...:나머지!
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3,4,5,6,7,8

// [k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(`k=${k}`); //k=1
// console.log(`p=${p}`); //p=3
// console.log(`next=${next}`); //next=5,6,7,8

//↦ 둘 다 똑같음... 아무 방법으로 하셈

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=3
console.log(`next=${next}`); //next=5,6,7,8

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`); //u=1 t=2 w=undefined

[u, t, w = 3] = [1, 2]; //디폴트값을 3으로 정해줌 -> 받는 값이 없을 때 디폴트값이 나옴
console.log(`u=${u} t=${t} w=${w}`); //u=1 t=2 w=3

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`); //u=1 t=2 w=5

//  2. 객체 Destructuring (구조 분해 할당)
const customer = { fullname: "고수", job: "연기자" };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname: ${fullname}, job: ${job}`); //fullname: 고수, job: 연기자

let { fullname: fn, job: jb } = customer;
console.log(`fullname: ${fn}, job: ${jb}`); //fullname: 고수, job: 연기자

let { job: work, fullname: fname } = customer; //job(속성명): work(변수), fullname(속성명): fname(변수)
console.log(`job: ${work}, fullname: ${fname}`); //job: 연기자, fullname: 고수

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`fullname: ${name}, job: ${jbn}, loc: ${loc}`); //fullname: 고수, job: 연기자, loc: 서울

// let { s, r } = { s: 1, r: 2 }
// console.log(s, r);

let s, r;
({ s, r } = { s: 1, r: 2 });
console.log(`s=${s} r=${r}`); //s=1 r=2

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

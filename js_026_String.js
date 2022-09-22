//js_026_String.js

let data = "It`s alright";
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end); start는 포함, end는 포함X
2. substr(start, length); length(길이)
3. slice(start, end);
*/

data = "Apple, Banana, Kiwi";

//Banana
console.log(`substring: ${data.substring(7, 13)}`); // 7인덱스부터 13인덱스 미만
//substring()은 음수값을 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`);

//Banana
console.log(`substr: ${data.substr(7, 6)}`);
//Banana
console.log(`substr: ${data.substr(-12, 6)}`);

//Banana
console.log(`slice: ${data.slice(7, 13)}`);
//Banana
console.log(`slice: ${data.slice(-12, -6)}`);

console.log(data);

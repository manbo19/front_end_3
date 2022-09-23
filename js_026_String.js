//js_026_String.js

let data = "It`s alright";
console.log(data);

/* length : 문자열의 길이 */
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

/* replace('찾을 문자열', '바꿀 문자열')
   i: 대소문자 구별 없음, g: 모든 문자열 */
//Apple, Grape, Kiwi
console.log(`replace: ${data.replace("Banana", "Grape")}`);
//              ↳ 기존 메모리의 값을 변경시키는 게 아니라 새로운 메모리에 값을 저장한 후 그 값을 리턴해줌 -> String은 불변
console.log(data);

data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/, "red")); // 대소문자 구별O

data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a red car
console.log(data.replace(/blue/g, "red")); // g: 모든 문자

data = "Mr Blue has a blue house and a blue car";
//Mr red has a blue house and a blue car
console.log(data.replace(/blue/i, "red")); // i: 대소문자 구별X

data = "Mr Blue has a blue house and a blue car";
//Mr red has a red house and a red car
console.log(data.replace(/blue/gi, "red")); // ig, gi : 대소문자 구별X 모든 문자

data = "Hello World";
//HELLO WORLD
console.log(`toUpperCase(): ${data.toUpperCase()}`); //toUpperCase(): 모든 문자열이 대문자로 바뀜
//hello world
console.log(`toLowerCase(): ${data.toLowerCase()}`); //toLowerCase(): 모든 문자열이 소문자로 바뀜

let data2 = "javascript";
//Hello Worldjavascript
console.log(`concat(): ${data.concat(data2)}`); //concat(): 문자열이 연결됨
//Hello World javascript
console.log(`concat(): ${data.concat(" ", data2)}`);
//Hello World_javascript
console.log(`concat(): ${data.concat("_", data2)}`);

//H
console.log(`charAt(): ${data.charAt(0)}`); //charAt(): n번째 문자열 출력
//72(unicode value)
console.log(`charCodeAt(): ${data.charCodeAt(0)}`); //charCodeAt(): 유니코드 값으로 리턴됨

/* split(): 문자열을 나눠준다. */
data = "a,b,c,d,e";

let arr = data.split(","); //쉼표를 기준해서 데이터값을 배열로 하나하나 따로따로 리턴해줌!
for (let i of arr) console.log(i);

/* match(): 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 배열로 리턴하고
            일치하는 문자열이 없으면 null로 리턴한다. */
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
//match(): blue,blue object true
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`); //match(): 일치하는 모든 문자의 값을 리턴해줌

res = data.match(/red/g);
//match(): null object false -> 일치하는 변수가 없으면 null이라고 뜸
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

/* search(): 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
             일치하는 문자열이 없으면 -1을 리턴한다. */
res = data.search(/blue/g); //g를 붙이든 안 붙이든 상관없음 왜냐면 어차피 리턴해주는 건 하나니까
//search(): 14
console.log(`search(): ${res}`); //search(): 인덱스를 리턴해줌

res = data.search(/red/g);
//search(): -1 -> 찾는 문자열이 없으면 '-1'로 나옴
console.log(`search(): ${res}`);

/* 
indexOf(): 문자열의 인덱스를 리턴 
*/
data = "Mr Blue has a blue house and a blue car";
//0
console.log(data.indexOf("M")); //indexOf: 지정한 문자의 인덱스값을 리턴해줌
//3
console.log(data.indexOf("B"));

let position = data.indexOf("blue");
//31 -> 2번째 'blue'의 인덱스값을 가져옴
console.log(data.indexOf("blue", position + 1));

// data = "Mr Blue has a blue house and a blue car";
// let pos = -1;
// do {
//   pos = pos + 1;
//   pos = data.indexOf("blue", pos);
//   if (pos != -1) console.log(pos);
// } while (pos != -1);

// ↳ for문으로 바꾸기
data = "Mr Blue has a blue house and a blue car";
for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}

/* repeat(): 반복해줌 */
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

let text2 = "  korea   data ";
//15
console.log(text2.length);
//12
console.log(text2.trim().length); //trim은 공백 지워줌(문자열 사이의 공백은 제거 안 됨)

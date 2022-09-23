//js_029_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
let data = fruits.toString(); //모든 객체들을 스트링타입으로 바꿔줌
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango -> 기본이 쉼표로 조인
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
//push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push

fruits[4] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push("Melon")); //6 -> 배열의 새로운 길이를 반환
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

//배열의 끝에 요소를 제거
//pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(fruits.pop()); //Melon 제거하고 메모리에도 안 남음
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열의 앞에 요소를 추가
//unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
console.log(fruits.unshift("Melon")); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열의 앞에 요소를 제거
//shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환, 배열의 길이를 변하게 함
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//특정 위치의 요소 제거(자리는 확보하고 있음)
//delete()
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ] -> 1이상 3미만
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ] -> 역으로도 가넝한
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ] -> 1번째 인덱스부터 가져오기

//오름차순 정렬
//sort() 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
//정렬한 배열. 원 배열이 정렬되는 것에 유의. 복사본이 만들어지는 것이 아님
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
console.log(fruits); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ] -> 원래 배열값 순서도 바뀜

//내림차순 정렬 -> reverse 해주면 됨!
console.log(fruits.sort().reverse()); //[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]

//javascript에서 sort()는 Tim sort 알고리즘을 사용한다.
//Tim sort는 Insertion sort와 Merge sort를 결합하여 만든 정렬이다.
//Tim sort 알고리즘: https://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); //[ 1, 10, 100, 40, 5 ] -> 제일 앞에 있는 것을 기준으로 정렬됨

//오름차순
//[ 1, 5, 10, 40, 100 ]
console.log(
  point.sort(function (a, b) {
    console.log(`a: ${a}, b: ${b}, a-b: ${a - b}`);
    return a - b;
  })
);

//내림차순
//[ 100, 40, 10, 5, 1 ]
console.log(
  point.sort(function (a, b) {
    //   console.log(`a: ${a}, b: ${b}, a-b: ${a - b}`);
    return b - a;
  })
);

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]); //concat(): 문자열이 연결됨 -> 인자값으로 여러 개 넣을 수 있음
console.log(zData.length); //9
console.log(zData); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr.flat()); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, [ 9, 10 ], 12 ] -> 원래 배열에 저장된 값 변경 안 됨
console.log(arr); //[ 1, 3, [ [ [Array] ] ], [ 7, 8 ], [ [ 9, 10 ], 12 ] ]
console.log(arr.flat(1)); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, [ 9, 10 ], 12 ] -> 아무것도 지정 안 한 거랑 같음
console.log(arr.flat(2)); //[ 1, 3, [ 4, 5 ], 7, 8, 9, 10, 12 ]
console.log(arr.flat(3)); //[1, 3, 4, 5, 7, 8, 9, 10, 12]

//js_030_spread_operator.js

////////////////////////////////////////////////////////////////////
//[1] 배열에서의 Spread Operator

//  1. 배열 복사(Array Copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; //arr2에는 arr1에 할당된 주소가 전달된 거임 -> 얇은 복사(shallow Copy)
console.log(`arr1: ${arr1}`); //arr1: 1,2,3
console.log(`arr2: ${arr2}`); //arr2: 1,2,3

arr2.push(4);
console.log(`arr1: ${arr1}`); //arr1: 1,2,3,4 -> 같은 주소를 가리키고 있기 때문에 arr1도 arr2랑 같아짐
console.log(`arr2: ${arr2}`); //arr2: 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //주소만 전달하는 게 아니라 새로운 메모리를 만듦 -> 깊은 복사(deep Copy)
console.log(`arr3: ${arr3}`); //arr3: 1,2,3
console.log(`arr4: ${arr4}`); //arr4: 1,2,3

arr4.push(8);
console.log(`arr3: ${arr3}`); //arr3: 1,2,3
console.log(`arr4: ${arr4}`); //arr4: 1,2,3,8 -> 얘만 바뀜

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); //[10, 20, 1, 2, 3, 40, 5]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); //[ 1, 5, 6, [ 7, 8 ] ]

//  2. 배열 병합(Array Concatenation)

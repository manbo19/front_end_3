/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의
function process(arr) {
  let data = [];
  // console.log(data.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      data[data.length] = arr[i];
    }
  }
  return data;
}

// console.log(process(arr));

//주어진 arr배열에서 3의 배수의 개수를 리턴하는  함수 정의
function count(process) {
  return process.length;
}

count(process(arr));

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus(process) {
  let sum = 0;
  for (let i = 0; i < process.length; i++) sum += process[i];
  return sum;
}

console.log(process(arr));
console.log(count(process(arr)));
// console.log(`주어진 배열에서 3의 배수의 개수 => ${count(process)}`);
console.log(arrPlus(process(arr)));
// console.log(`주어진 배열에서 3의 배수의 합=> ${arrPlus(process)}`);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
let arr2 = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의
function process2(arr2) {
  let data = [];
  // console.log(data.length);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 == 0) {
      data[data.length] = arr2[i];
    }
  }
  return data;
}

//주어진 arr배열에서 3의 배수의 개수를 리턴하는  함수 정의
function count2(process) {
  return process(arr2).length;
}

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus2(process) {
  let sum = 0;
  let data = process(arr2);
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum;
}

console.log(process2(arr2));
console.log(`주어진 배열에서 3의 배수의 개수 => ${count2(process2)}`);
console.log(`주어진 배열에서 3의 배수의 합=> ${arrPlus2(process2)}`);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

/*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

//alpa배열의 요소를 reverse한 후 리턴하는 함수 정의
function reverse(alpa) {
  let data = [];
  for (let i = alpa.length - 1; i >= 0; i--) {
    data[data.length] = alpa[i];
  }
  return data;
}

//data배열의 출력하는 함수 정의
function display(data) {
  for (let i = 0; i < data.length; i++) process.stdout.write(data[i]);
  process.stdout.write("\n"); //줄바꿈
  // return; : return;만 있으면 현재 실행중인 것을 강제로 빠져나옴
}

// console.log(display(alpa));

display(alpa);
display(reverse(alpa));
display(alpa);

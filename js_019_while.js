//js_019_while.js

/*
    while(조건식){
        실행문;
    }
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("============================================");

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*
- 적어도 한 번 실행함...

do{
    실행문:
}while(조건식);
*/

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

do {
  console.log("고객님 주문하시겠습니까?(y/n)");
  let input = prompt("입력");
} while (input == "y");

console.group("1)번문제");

const 수학 = "b";

if (수학 === "a" || 수학 === "b" || 수학 === "c") {
  console.log("이 과목을 pass 했습니다");
} else {
  console.log("이 과목을 pass 하지 못했습니다");
}

//////////////////// 아래는 코드가 지저분한 코드에 속함///////////////////////////

// if (수학 === "a") {
//   console.log("이 과목을 pass 했습니다");
// } else if (수학 === "b") {
//   console.log("이 과목을 pass 했습니다");
// } else if (수학 === "c") {
//   console.log("이 과목을 pass 했습니다");}
//   else {
//   console.log("이 과목을 pass 하지 못했습니다");
// }
console.groupEnd();

console.group("2)번문제");

let x = 0; //이진수
let y = 1; //2개표현

while (x < 11) {
  //10개의 이진수는 총 몇개의 정보표현?
  x++; // 이진수 하난씩 늘어날때
  y *= 2; // 2배씩 표현할수있다
  console.log(`이진수 ${x} 는 ${y} 개의 정보를 표시 가능`);
}

//////////////////강사풀이////////////////////////////
let i = 1; //초기식
let bit = 1;

while (i <= 10) {
  //조건식
  bit *= 2;
  console.log(`이진수 ${i} 는 ${bit} 개의 정보를 표시 가능`);
  i++; // 증감식
}
console.groupEnd();

console.group("3)번문제");

let x = 1;
for (let y = 1; y <= 10; y++) {
  //10개의 이진수가 하나씩 증가
  x *= 2; //2배씩 표현
  console.log(`이진수 ${y} 는 ${x} 개의 정보를 표시 가능`);
}

//////////////////강사풀이////////////////////////////
let bit = 1; //초기식

for (let i = 1; i <= 10; i++) {
  //조건식
  bit *= 2;
  console.log(`이진수 ${i} 는 ${bit} 개의 정보를 표시 가능`);
}

console.groupEnd();

console.group("1)문제");

for (let i = 9; i >= 0; i--) {
  // 큰수부터 순차적 출력
  if (i % 2 !== 0) {
    // 홀수만 출력
    console.log(i);
  }
}
////////////////강사풀이////////////////////////////

//풀이 1)
for (let i = 9; i >= 0; i -= 2) {
  // 큰수부터 순차적 출력
  console.log(i);
}

//풀이 2)
for (let i = 0; i < 10; i++) {
  const k = 9 - i;
  if (k % 2 === 1) console.log(k);
}
console.groupEnd();





/////////////////////////////////////////////////////////////////////////////////

console.group("2)문제");
let i = 9;
while (i > 0) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i--; 
}
////////////////강사풀이////////////////////////////
//풀이 1 )
let i = 9;
while (i > -1) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i--; 
}

//풀이 2 )
let i = 9;
while (i > -1) {
  console.log(i);
  i-= 2; 
}
console.groupEnd();

//풀이 3 )
let i = 0;
while (i< 10) {
  const k =9 -i;
if(k % 2 ==1){
  console.log(k);
}
i++;
}

//풀이 4 )
let i = 0;
while (i< 10) {
  console.log(9-i);
  i+=2;
}

console.groupEnd();





//////////////////////////////////////////////////////////////////////////////////////////////
console.group("3)문제");
let sum = 0;

let x = 2;
let y = 3;


for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    sum += i;
  }
}
console.log("%d 와 %d의 공배수의 총 합 : %d", x, y, sum);
console.groupEnd();





///////////////////////////////////////////////////////////////////////////
console.group("4)문제");
let sum = 0; // 경우의수 합계

for (let i = 1; i <= 6; i++) {
  // 첫번째 주사위
  for (let j = 1; j <= 6; j++) {
    // 두번째 주사위
    if (i + j === 6) {
      console.log([i, j]);
      sum += 1; 
      // sum++;
    }
  }
}
console.log("경우의 수는 %d 입니다", sum);
console.groupEnd();




///////////////////////////////////////////////////////////////////////////

console.group("5)문제");
for (let i = 0; i < 4; i++) { // 행 4번 반복
  let str = ""; // 다음줄로 넘어가
  for (let j = 0; j<4; j++) { // 열4번 반복
    str += i + j + " "; // 행과 열을 더함 
  }
  console.log(str);
}
////////////////강사풀이////////////////////////////
//풀이 1 )
for (let i = 0; i < 4; i++) {
  let str = ""; 
  for (let j = i; j<i+4; j++) {
    str += j;

    if(j+1 < i+4){
      str += " ";
    }
  }
  console.log(str);
}

//풀이 2 )
for (let i = 0; i < 4; i++) {
  let str = "";

  for (let j = 0; j<4; j++) {
    str += i+j;

    if(j+1 < i+4){
      str += " ";
    }
  }
  console.log(str);
}

console.groupEnd();






///////////////////////////////////////////////////////////////////////////
console.group("6)문제");
for (let i = 0; i < 7; i++) {
  let str = "";
  for (let j = 1; j <=i+1; j++) {
    str += j;
  }

  for (let j = 0; j <i+1; j++) {
    str += j+1;
  } 
  console.log(str);
}
console.groupEnd();





///////////////////////////////////////////////////////////////////////////
console.group("7)문제");
const number=1; // 또는 2

for (let i=2; i<10; i++) { // 홀수인경우 
  if (number == 1) {
      if (i % 2 == 1) {
          for (let j=1; j<10; j++) {
              console.log("%d x %d = %d", i, j, i*j);
          }
      }
  } else {
      if (i % 2 == 0) { // 짝수인경우
          for (let j=1; j<10; j++) {
              console.log("%d x %d = %d", i, j, i*j);
          }
      }
  }
}

////////////////강사풀이////////////////////////////
//풀이 1)
const number=2; 

if(number ==1){
  for(let i=3; i<10; i+=2){
    for(let j=1; j<10; j++){
      console.log("%d X %d = %d", i,j);
    }
  }
} else {
  for(let i=2; i<10; i+=2){
    for(let j=1; j<10; j++){
      console.log("%d X %d = %d", i,j,i*j);
    }
  }
}

//풀이 2)
const number=1; 

for (let i=2; i<10; i++) {
  if (number == 1) {
      if (i % 2 == 1) {
          for (let j=1; j<10; j++) {
              console.log("%d x %d = %d", i, j, i*j);
          }
      }
  } else {
      if (i % 2 == 0) {
          for (let j=1; j<10; j++) {
              console.log("%d x %d = %d", i, j, i*j);
          }
      }
  }
}
 
//풀이 3)
const number=1;

let start = number == 2 ? 2 : 3;
for (let i=start; i<10; i+=2){
  for (let j=1; j<10; j++){
    console.log("%d x %d = %d", i, j, i*j);
  }
}

//풀이 4)
const number=1;

for (let i=4 - number; i<10; i+=2){
  for (let j=1; j<10; j++){
    console.log("%d x %d = %d", i, j, i*j);
  }
}

console.groupEnd();

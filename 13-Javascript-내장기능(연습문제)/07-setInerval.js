let count1 =0;

const timerId1 = setInterval(() => {
  count1++
  console.log("[타이머1]" + count1 + "번째 자동 실행 ");

  if (count1 == 5) {
    console.log("타이머1 종료 ");
    clearInterval(timerId1);
  }
}, 3000);

console.log("타이머 1 시작");


/////////////////////////////////

let count2 =0;

const timerId2 = setInterval(() => {
  count1++
  console.log("[타이머2]" + count2 + "번째 자동 실행 ");

  if (count2 == 5) {
    console.log("타이머2 종료 ");
    clearInterval(timerId1);
  }
}, 1000);

console.log("타이머 2 시작");
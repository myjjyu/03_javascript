//선택정렬
let money = [209000, 109000, 119000, 109000, 94000];
console.log(money);

for (let i = 0; i < money.length - 1; i++) {
  for (let j = i + 1; j < money.length; j++) {
    if (money[i] > money[j]) {
      const tmp = money[i]; // 임시변수 만든것임 
      money[i] = money[j];
      money[j] = tmp;
      // console.log("%d회차 : ", i + 1, money);
    }
  }
}
console.log(money);

////////////////////////////////////////강사풀이////////////////////////////////////////
//버블정렬 풀이

let money = [209000, 109000, 119000, 109000, 94000];
console.log(money);

for (let i = 0; i < money.length - 1; i++) {
  for (let j = 0; j < money.length-1 -i; j++) {
    if (money[j] > money[j+1]) {
      const tmp = money[j]; // 임시변수 만든것임 
      money[j] = money[j+1];
      money[j] = tmp;
      // console.log("%d회차 : ", i + 1, money);
    }
  }
}
console.log(money);
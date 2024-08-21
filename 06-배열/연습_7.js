console.group("7번문제");
let money = [209000, 109000, 119000, 109000, 94000];
console.log(money);

for (let i = 0; i < money.length - 1; i++) {
  for (let j = i + 1; j < money.length; j++) {
    if (money[i] > money[j]) {
      const tmp = money[i];
      money[i] = money[j];
      money[j] = tmp;
      console.log("%d회차 : ", i + 1, money);
    }
  }
}
console.log(money);
console.groupEnd();

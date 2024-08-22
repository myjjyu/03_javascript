let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];

let max = 0;

for (let i = 0; i < price.length; i++) {
  let money = price[i] * qty[i];
  console.log(money);
  if (money > max) {
    max = money;
  }
}
console.log("가장비싼 항목은 %s 원이다", max);

////////////////////////////////////////강사풀이////////////////////////////////////////

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];

//  최대값을 구할때는 배열안에 인댁스가 들어가는 구조로 짜는게 좋다.
// 단가*수량 중에서 가장 큰 값을 구해야 하므로 처음에 저장하는 값도 단가 *수랑으로 설정
let max = price[0] * qty[0];

for (let i = 1; i < price.length; i++) {
  const sum = price[i] * qty[i]; // i 번째에 대한 총 금액을 구한다.

  if (max < sum) {
    max = sum;
  }
}

console.log("가장비싼 항목은 %s 원이다", max);

console.group("5번문제");
let price  = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];

let max =0;

for(let i = 0; i < price.length; i++){
  let money = price[i] * qty[i];
  console.log(money);
  if(money > max){
    max = money; 
  }
}
console.log("가장비싼 항목은 %s 원이다",max);
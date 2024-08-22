let money= 0;

//배열과 인덱스가 서로 짝을 이룰수있겠끔 코드짜는게 좋다 
let price  = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];

for(let i = 0; i < price.length; i++){
  money += price[i] * qty[i];
}

console.log("총 결제금액 은 %s 원", money);



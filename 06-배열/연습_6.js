let price = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5]; 

let money = 0;

for(let i = 0; i < price.length; i++){
  let sum = price[i] * qty[i]; 
  console.log(sum);


  if(sum >= 80000){
    money++; 
  }
}

console.log("무료배송 은 %s 개", money);

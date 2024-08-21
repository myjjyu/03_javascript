console.group("4번문제");
let money= 0;

let price  = [38000, 20000, 17900, 17900];
let qty = price[0];

for(let i = 0; i<price.length; i++){
  console.log("qty=%d, price[%d]=%d",qty,i,price[i]);

  if(qty > data[i]){ 
    console.log(">> qty 에 " + price[i] + "를 복사");
    qty = price[i]; 
  }
  } 
  console.log(qty) ;

console.groupEnd();

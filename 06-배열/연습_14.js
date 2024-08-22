const cs = [1,5,7,"j","q","a"];
const yh = [2,3,4,5,"q","k","a"];

let count = 0;

for(let i = 0 ; i < yh.length; i++){
  for(let j =0 ; j< cs.length; j++){
    //console.log(`영희카드 : ${yh}-${cs[j]}`);
    if (yh[i] == cs[j]){
      count++;
    }
  }
}
console.log(`가져올수 있는 카드수 ${count}장`);

for(let i = 0 ; i < yh.length; i++){
  for(let j =0 ; j< cs.length; j++){
    if (yh[i] == cs[j]){
console.log(`${j}번째 >> ${cs[j]}`);
    }
  }
}
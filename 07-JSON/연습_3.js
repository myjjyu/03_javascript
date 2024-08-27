console.group("3-1");

const  covid19 = [ // 괄호는 배열임 
{date: '0125', active: 426}, 
{date: '0126', active: 343}, 
{date: '0127', active: 547}, 
{date: '0128', active: 490},
{date: '0129', active: 460},
{date: '0130', active: 443}, 
{date: '0131', active: 338},
{date: '0201', active: 299}
];

let sum =0;

for(const j of covid19){
  // console.log(j);
  sum+= j.active;
}


console.log("누적 확신자 수 : %d", sum);
console.log("평균 확신자 수 : %d", sum / covid19.length);


console.groupEnd();


console.group("3-2");

const covid19 = [
{date: '0125', active: 426}, 
{date: '0126', active: 343}, 
{date: '0127', active: 547}, 
{date: '0128', active: 490},
{date: '0129', active: 460},
{date: '0130', active: 443}, 
{date: '0131', active: 338},
{date: '0201', active: 299}
];

let max =Object.assign (covid19[0]);

for(let i = 0; i<covid19.length; i++){
 if(max_active < covid19[i].active){
    max_active = Object.assign(covid19[i]);
  
 }
}
console.log("확진자가 가장 많이 나타난날%s ", max.date);

console.groupEnd();


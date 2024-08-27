// v = 배열의 원소
// i = 각 원소의 인덱스
// arr = 원본배열

// 배열을 탐색하는 방법
const arr1= [10,20,30,40,50];

//고전적 방법 : 반복문을 활용하여 배열의 원소 탐색
for(let i = 0; i < arr1.length; i++){
  if(i == 3){
    console.log(' ~~반복중단');
    break;
  }
  console.log('%d번째 원소==>%d', i,arr1[i])
}

const arr2= [10,20,30,40,50];

arr2.forEach((v,i)=>{
  if (i ==3) {
    console.log('~~반복중단');
    return;
  }
  console.log('%d번째 원소==>%d', i,v);
})

console.log("-------------------------");

const arr3= [10,20,30,40,50];

arr3.some((v,i)=>{
  if (i ==3) {
    console.log('~~반복중단');
    return true;
  }
  console.log('%d번째 원소==>%d', i,v);
})


const arr4 = [10, 20, 30, 40, 50];

const hello = arr4.map((v, i) => {
    return v * 10;
});

console.log(hello); // [100, 200, 300, 400, 500]

const arr5 = [10, 20, 30, 40, 50];

// 올바르게 고친 코드:
const world = arr5.map((v, i) => v * 10);
console.log(world); // [100, 200, 300, 400, 500]



const arr6= [5,12,8,131,44];

const found  = arr6.find(function(v){
  console.log(v);

  if(v % 2 == 0){
    return true;
  }
});
console.log(found);



const arr7= [5,12,8,131,44];
const d1 = [];

for(let i = 0; i < arr7.length; i ++){
  if(arr7[i] % 2 == 0 ){
    d1.push(arr7[i]);
  }
}
console.log(d1);


const arr8= [5,12,8,131,44];
const d2 = [];

arr8.forEach((v,i)=>{
  if(v % 2 ==0) {
    d2.push(v);
  }
})

console.log(d2);


const arr9= [5,12,8,131,44];
const d3 = arr9.filter(function(v, i, arr) {
console.log('v=%d, i=%d, arr=%s', v, i, arr);
if(v % 2 ==0) {
  return true;
}else{
  return false;
}
});
console.log(d3);


const arr10= [2,1,15];
arr10.sort(function (a,b ){
  console.log("a=%s, b=%s", a, b);

  if(a>b){
    return 1;
  }else{
    return -1
  }
});
console.log(arr10);



const arr11= [1,2,3,4,5];
arr11.reverse();
console.log(arr11);



const arr12 = [5, 12, 8, 131, 44]; // 배열이 선언되어 있어야 합니다.
const result = arr12.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator=${accumulator}, currentValue=${currentValue}, index=${index}`);
    return accumulator + currentValue;
}, 0);


console.log(`result=${result}`); 

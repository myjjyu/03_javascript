// 조건문이 실행되지 앟는 경우

// var 중복 선언
if(false){
  var num1=100;
  console.log("블록안:" + num1);
}

console.log("블록밖" + num1);

//조건문이 실행되는 경우
if (true) {
  var num2 =100;
  console.log("블록안 :" + num2);
}

console.log("블록밖 : " + num2);

//let 중복선언
let num3 = 100;

if(true){
  //블록 밖에서 생성된 변수를 블록안에서 사용 가능
  let num4 = num3 + 100;
  console.log("블록안 :" + num4);
}

console.log("반복문 밖 >>>" + num4);

//let 으로 선언된 변수는 if 문의 실행 여부 상관없이 블로 빠져나올수 없음
//  밖으로 빠져나왔기 때문에 프로그램 에러실행됨
// console.log("블록안 :" + num4);

//for문에 초기식 var 로 선언한경우 
for(var i =0; i<10; i++){
  console.log("반복문 안 :::" + i);
}
// for문의 초기식도  {}에 속한것으로 보기 때문에 j값은 for블록을 빠져나올수 없음
console.log("반복문 밖 >>>" + i);


// for 문의 초기식을 let 으로 선ㄴ언한 경우
for(let j =0; j<10; j++){
  console.log("반복문 안 :::" + j);
}
console.log("반복문 밖 >>>" + j);

//let 키워드는 반드시 선언-> 할당의 순서로만 사용 가능함
//let 키워드는 반드시 선언 -> 할당의 순서로만 사용가능함
// 실행은 안됨!!!
x = 100; //할당 
let x; // 선언
console.log(x);

//var 키워드는 할당 후 선언이 가능함
// 이상해!!! 그래서 var 는 안쓰는게 좋당

y= 200;
var y;
console.log(y);

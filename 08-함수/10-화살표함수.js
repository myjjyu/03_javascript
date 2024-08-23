// 간단한 화살표 함수 기본형 

const say = function(msg){
  console.log("sayHello(" + msg + ")");
};

say ("Hellow Javascript");

// 이구조의 함수를 회살표 함수로 바꾸는것

//const foo = function(x){
const foo  = (x) => {
   for(let i=0; i<x; i++){
    console.log("Hello World");
  }
};

foo(7);


// 파라미터가 하나면 존재할 셩우 소괄호 생략 가능
// 파라미터가 없거나 , 두개 이상이면 괄호생략 불가!!!

const bar = x => {
  for (let i=0; i < x; i++){
    console.log("Hello World");
  }
};

bar(3);


// 처리 로직이 한줄만 존재하는 경우 
// 파라미터 x,y를 받아서 x+y를 리턴하는 arrowReturn 이라는 이름의 함수
const hello =(x,y) => {
  return x*y;
};
// 이 구조의 함수를 

const hello = (x,y) => x+y;
console.log(hello(100,400));
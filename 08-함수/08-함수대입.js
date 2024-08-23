// 함수를 변수에 대입하기

function sayHello(msg){
  console.log("sayHello(" + msg + ")");
}

sayHello("안녕하세요 자바스크립트!");


// // 함수 = 변수는 동급이다 즉 함수는 다른 변수에 대입 가능하다
const say = sayHello;
say("Hellow Javascript"); // 함수가 대입된 변수는 그 자체가 함수의 역할을 한다 
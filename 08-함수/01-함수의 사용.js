//함수 정의하고 호출하기 

function sayHello(){
  console.log("hello javascript.");
  console.log("안녕하세요 자바스크립트");
}

// 함수 호출하기

sayHello();

// 정의되 함수는 여러번 재사용 가능함
for(let i = 0 ; i < 5; i ++){
  sayHello();
}
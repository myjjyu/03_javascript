// 기본 함수
const say = function(msg) {
  console.log("sayHello(" + msg + ")");
};

say("Hello Javascript");

// 화살표 함수 (파라미터가 하나인 경우)
const foo = x => {
  for (let i = 0; i < x; i++) {
    console.log("Hello World");
  }
};

foo(7);

// 파라미터가 하나일 때의 화살표 함수
const bar = x => {
  for (let i = 0; i < x; i++) {
    console.log("Hello World");
  }
};

bar(3);

// 처리 로직이 한 줄만 존재하는 경우 (수정된 부분)
const hello = (x, y) => x * y;
console.log(hello(100, 400)); // 40000

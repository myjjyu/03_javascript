const say = function(msg){
  console.log("sayHello(" + msg + ")");
};

// 함수가 대입된 변수는 그 자체기 함수 역할을 한다

say ("Hellow Javascript");





// 함수가 대입된 변수는 그 자체기 함수 역할을 한다  응용버전
// 객체의 구조 

// 싱글톤 구조
const calc = {
  a:100,  
  b:200,
  foo: function(x,y){
    return x+y;
  },
  bar: function(x,y){
    return x - y;
  }
}

console.log(calc.foo(10,20));

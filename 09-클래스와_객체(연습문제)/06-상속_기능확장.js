class SayHello{
  eng(){
    console.log("hello javascript");
  }
}
// console.log("hello javascript");

class SayHelloWorld extends SayHello {
  kor(){
    console.log("안녕하세요 자바스크립트");
  }
}
// console.log("안녕하세요 자바스크립트");

const say = new SayHelloWorld();
say.eng();
say.kor();
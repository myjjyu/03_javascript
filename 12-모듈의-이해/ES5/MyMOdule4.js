class HelloWorld {
  constructor(){
    console.log("-----MyClass 의 객체가 생성되었스브니다 -----");
  }
  say (){
    console.log("Hello World");
  }
}
module.exports = new HelloWorld;
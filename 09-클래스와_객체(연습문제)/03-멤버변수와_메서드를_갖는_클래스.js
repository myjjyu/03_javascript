// this. 정의를 내려야 출력가능
// this 를 정의하지 않으면 전체 로직 안에서 정보를 호출함

class HelloWorld {
  message = null;

  sayHello(){
    console.log(this.message);
  }

  setEng(){
    this.message = "Hello Javascript";
  }
  setKor(){
    this.message = "안녕하세요. 자바스크립트";
  }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();
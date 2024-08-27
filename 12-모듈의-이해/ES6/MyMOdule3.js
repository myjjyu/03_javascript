class MyClass {
  #age;
  #name;

  constructor(){
    console.log("------ MyClass 의 객체가 생성 되었습니다 -----");
    this.#age = 20;
    this.#name = "노드";
  }
  say(){
    console.log("이름 : " + this.#name);
    console.log("나이 : " + this.#age);
  }
}

export default MyClass;
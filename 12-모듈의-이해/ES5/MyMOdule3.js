class MyClass {
 #age;
 #name;
 
 constructor(){
  console.log("-----MyClass 의 객체가 생성되었스브니다 -----");
  this.#age = 20;
  this.#name = "노드";
 }

say(){
  console.log("이름 :" + this.#name);
  console.log("나이 :" + this.#age);
}
}
module.exports = MyClass;
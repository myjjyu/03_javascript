// 존재하지 않는 key 를 사용하는 경우 
const foo ={
  name : "자바스크립트",
  age: 19
};

console.log(foo.email);

// 존재하지 않는 값을 활용한 연산
const nextAge = foo.aga +1;
console.log(nextAge);


// 존재하자 않는 key 에 대한 대입 
foo.email = "hello@world.com";
console.log(foo);

//빈 객체 확장 
const myJson = {};
console.log(myJson);

for (let i =0; i<10; i++){
  const key = "value" + i;
   myJson[key] = i * 100;
};

console.log(myJson);
const a = 5;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);

const x = 5;
const y = 3;
const z = x + y - 2;
console.log(z);

const myValue3 = 4;
const myValue4 = 3;
console.log(myValue3 / myValue4);

// 문자열과 다른타입의 덧셈
// --> 문자열과 연산되는 다른 타입은 모두 문자열로 자동 변환된다
// 결국 문자열끼리의 덧셈과 동일한 결과

console.log("안녕하세요." + 123);
console.log("안녕하세요." + true);
console.log("안녕하세요." + null);

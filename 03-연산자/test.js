// 연산자 교안 연습문제 1번 

// const year = 2024;
// let age = year - 1992;
// console.log("나는 %d 세 입니다" ,age)


// 연산자 교안 연습문제 2번 


// const age = 32;
// let year = 2024 - age;
// console.log("나는 %d 년도에 태어났습니다" ,year)


// 연산자 교안 연습문제 3번 
const numOfApples = 123;

// 10개씩 담았을 경우 남는 사과가 몇개인지 구함
const extra = numOfApples % 10;
console.log(`나머지=${extra}`);


// 나머지 담기 위한 바구니의 수
const extrabasket = extra == 0 ? 0 : 1;
console.log(`바구니 수 = ${extrabasket}`);

// 10개씩 나누어 담았을 때 바구니의 수
let basketcount = (numOfApples - extra) / 10 + extrabasket;
console.log (`바구니 수 =${basketcount}`);

// let basketcount = (numOfApples - extra) / 10 + (extra? 1:0);
// console.log (`바구니 수 = ${basketcount}`);
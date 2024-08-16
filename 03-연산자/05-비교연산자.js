let x =100;
let y = 50;

let compare1 = x >= y;
let compare2 = x > y;
let compare3 = x <= y;
let compare4 = x < y;

console.group("1) ,이상, 이하, 미만, 초과");
console.log(compare1);
console.log(compare2);
console.log(compare3);
console.log(compare4);
console.groupEnd();

let a1= "1";
let a2= 1;
let a3= 1.0;
let a4= true;

console.group("2) 같다");
console.group("내용만 비교하는 경우");
console.log(a1 ==a2);
console.log(a1 ==a3);
console.log(a1 ==a4);
console.groupEnd();


console.group("데이터 타입까지 비교하는 경우");
console.log(a1 ==a2);
console.log(a1 ==a3);
console.log(a1 ==a4);
console.groupEnd();

let b1 ="1";
let b2 =1;
let b3 =1.0;
let b4 =true;

// 넘버3과 문자열3은 같아~  하고  구색만 비슷하면 참
console.group("3) 다르다");
console.group("내용만 비교하는 경우");
console.log(b1 !=b2);
console.log(b1 !=b3);
console.log(b1 !=b4);
console.groupEnd();

// 문자열이면 문자열 넘버와 넘버! 이렇게 데이터까지 비교함
console.group("데이터 타입까지 비교하는 경우");
console.log(b1 !==b2);
console.log(b1 !==b3);
console.log(b1 !==b4);
console.groupEnd();
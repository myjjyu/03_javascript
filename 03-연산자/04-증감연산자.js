// 변수 스스로 1 증가

let selfPlus = 1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);

//변수 스스로 1 감소

let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

//전위 증감 연산자 (앞북)
let prevValue = 1;

//  prevValue 를 먼저 1증가시키고 전체 수식을 처리한다
let prevRalue = 100 + ++prevValue;




console.log(prevRalue);
console.log(prevValue);

//후위 증감 연산자  (뒷북)
let nextValue = 1;

//100+nextValue 를 먼저 처리하고 나중에서야 nextValue  가 1 증가한다
let nextResult = 100 + nextValue++;


console.log(nextResult);
console.log(nextValue);

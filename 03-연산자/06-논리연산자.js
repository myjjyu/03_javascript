

// 거짓이 하나라도 있으면 거짓 
console.group("1) and");
console.log(true && true) ;
console.log(true && false) ;
console.log(false && true) ;
console.log(false && false) ;
console.groupEnd();


// and 연산 여러개 사용
console.group("2) and");
console.log(true && true && true) ;
console.log(true && true && false) ;
console.log(false && false && true ) ;
console.log(false && true && false) ;
console.groupEnd();


// 참이 하나라도 있으면 참

console.group("3) or");
console.log(true || true) ;
console.log(true || false) ;
console.log(false || true) ;
console.log(false || false) ;
console.groupEnd();


// or 연산 여러개 사용

console.group("4) or");
console.log(true || true || true) ;
console.log(true || true || false) ;
console.log(false || false || true ) ;
console.log(false || true || false) ;
console.groupEnd();


//복합사용
// and  연산자 먼저 우선 계산

console.group("5) 복합사용");
console.log(true && true || true) ;
console.log(true && true || false) ;
console.log(false && false || true ) ;
console.log(false && true || false) ;


console.log(true || true && true) ;
console.log(true || true && false) ;
console.log(false || false && true ) ;
console.log(false || true && false) ;
console.groupEnd();

// 실수를 리턴함

// 정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat("3.14"));
console.log(parseFloat("314e-2")); // .이 뒤로 두칸 이동
console.log(parseFloat("0.0314E+2")); // .이 앞으로 두칸이동

// nan을 반환하는 경우 

console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat("ff2")); 
// 숫자로 변환될수 없다고 판단하는 경우 // true

console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({a: 10,b:20})); // 오브젝트
console.log(isNaN([10,20,30])); // 오브젝트
console.log(isNaN('blabla'));// 문자열
console.log(isNaN('123abc'));// 문자열

//숫자로 변환할수 있다고 판단하는경우 // false

console.log(isNaN(true)); // -- 트루는 숫자 1이기 때문에
console.log(isNaN(null)); // --거짓은 숫자 0이기때문에 
console.log(isNaN(37)); // 넘버 
console.log(isNaN('37')); 
console.log(isNaN('37.37'));
console.log(isNaN('')); // 빈문자열은 0으로 변환
console.log(isNaN(' ')); // 공백으로 된 빈문자열도 0으로 변환
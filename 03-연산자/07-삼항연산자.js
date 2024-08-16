
// 참이면 값1 번 거짓이면 값2 번을 결과값으로 내보냄

const age1 = 19;
const type1= age1 >= 20? "성인 " : "청소년";
console.log ("당신은 %s 입니다.", type1)

const code = 3;
const yy = 6;
const result = yy + (code == 3 || code == 4 ? 2000 : 1900);
console.log ("태어난 년도는 %d", result)
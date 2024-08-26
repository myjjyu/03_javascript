// 개발자가 발생시키는 에러에 대한 예외처리
let err = new Error("이상한 일이 벌어졌습니다");

try{
  throw err;
} catch (err) {

console.log("에러이름 %s:" , err.name);
console.log("에러이름 %s" , err.message);
}
console.log("프로그램 종료");


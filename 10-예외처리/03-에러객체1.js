//개발자가 직접 정의 하는 에러 

let err = new Error("이상한 일이 벌어졌습니다");
console.log("에러이름 %s:" , err.name);
console.log("에러이름 %s" , err.message);

// 개발자가 직접 에러를 발생시킬수있다
throw err;
console.log("프로그램 종료");


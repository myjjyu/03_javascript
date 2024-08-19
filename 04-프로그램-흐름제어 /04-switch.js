console.group("1) switch 기본구문 ");

const 국어 = "b";
switch (국어) {
  case "a":
    console.log("a학점 입니다.");
    break;
  case "b":
    console.log("b학점 입니다");
    break;
  case "c":
    console.log("c 학점 입니다");
    break;
  default:
    console.log("c 학점 미만 입니다");
    break;
}
console.groupEnd();

console.group("3) 의도적으로 break 조절하기");
const 수학 = "b";
switch (수학) {
  case "a":
  case "b":
  case "c":
    console.log("이 과목을 pass 했습니다");
  default:
    break;
    console.log("이 과목을 pass 하지 못했습니다");
    break;
}
console.groupEnd();

console.group("4) break의 조건을 식으로 설정하는 경우");

const 과학 = 72;

switch (과학 > 70) {
  case true:
    console.log("이 과목을 pass 했습니다");
    break;
  default:
    console.log("이 과목을 pass 하지 못했습니다");
    break;
}

console.groupEnd();



console.group("10번문제");

let student = [
  ["둘리", 78, 89, 96],
  ["도우너", 62, 77, 67],
  ["또치", 54, 90, 80],
  ["희동", 100, 99, 98],
];

let sum = 0;


for (let i = 0; i < student.length; i++) {
  let grade = 0; // 학생 개개인 총점
  for (let j = 1; j < student[i].length; j++) {
   sum += student[i][j];
   grade += student[i][j];
  }

  const grade_avg = grade / (student[i].length - 1);
  console.log(
    "%s의 총점은 %d 이고 평균은 %d 입니다",);
    student[i][0],grade;
}
console.log("모든학생의 총점은 %d 입니다", sum);


let avg = sum / student.length;
console.log(" 반 평균은 ? %d ", avg);

console.groupEnd();


console.group("11번문제");
console.groupEnd();
console.group("9번문제");
let student = [
  ["둘리", 78, 89, 96],
  ["도우너", 62, 77, 67],
  ["또치", 54, 90, 80],
  ["희동", 100, 99, 98],
];
for (let i = 0; i < student.length; i++) {
  let grade = 0;
  for (let j = 1; j < student[i].length; j++) {
    grade += student[i][j];
  }
  const grade_avg = grade / (student[i].length - 1);
  console.log(
    "%s의 총점은 %d 이고 평균은 %d 입니다",
    student[i][0],
    grade,
    grade_avg
  );
}
console.groupEnd();
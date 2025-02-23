let student = [
  ["둘리", 78, 89, 96],
  ["도우너", 62, 77, 67],
  ["또치", 54, 90, 80],
  ["희동", 100, 99, 98],
];

let sum = 0; // 반 전체 총점
let studentSum = 0; // 학생 평균의 총합

for (let i = 0; i < student.length; i++) {
  let grade = 0; // 학생 개개인의 총점

  // 학생의 점수 합산
  for (let j = 1; j < student[i].length; j++) {
    grade += student[i][j];
  }

  // 학생의 평균 계산
  const grade_avg = grade / (student[i].length - 1);

  sum += grade;
  studentSum += grade_avg;

  console.log(
    "%s의 총점은 %d 이고 평균은 %d 입니다",
    student[i][0],
    grade,
    grade_avg
  );
}

// 반 평균 계산
let class_avg = studentSum / student.length;

console.log("모든 학생의 총점은 %d 입니다", sum);
console.log("반 평균은 %d입니다", class_avg);

////////////////////////////////////////강사풀이////////////////////////////////////////

let student = ["둘리", "도우너", "또치", "희동"]; // 학생이름 배열
let grade = [
  // 성적표 배열
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98],
];

// 학생별 평균점수의 총 합
let class_sum = 0;


for (let i = 0; i < grade.length; i++) {
  let sum = 0; 

  for (let j = 0; j < grade[i].length; j++) {
    sum += grade[i][j];
  }

  class_sum += sum / grade[i].length;

  // 학생별 평균의 합 / 학생수
  const class_avg = class_sum / student.length;
  console.log(`반평균 : ${class_avg}점`);
}

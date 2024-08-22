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

////////////////////////////////////////강사풀이////////////////////////////////////////

let student = ["둘리", "도우너", "또치", "희동"]; // 학생이름 배열
let grade = [
  // 성적표 배열
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98],
];
// 총점과 평균 구하기
// 학생별 반복처리
for (let i = 0; i < student.length; i++) {
  let sum = 0; // 학생별 총점은 이 위치에서 변수가 초기화 되어야 한다

  // 각학생의 과목별 반복처리
  for (let j = 1; j < student[i].length; j++) {
    sum += grade[i][j];
  }

  // 평균은 학생 한명의 총점을 한명이 응시한 과목수 (= 배열의 길이) 로 나눈다
  let svg = sum / grade[i].length;
  console.log(`${student[i]} 총점 : ${sum}점 , 평균 : ${svg}점`);
}

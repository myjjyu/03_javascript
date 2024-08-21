//학생 성적표 배열
const grade = [
  ["철수", 92, 81, 76],
  ["영희", 72, 95, 84],
  ["영희", 80, 86, 98],
];

//모든 학색의 총점
let sum = 0;

//2차 배열 탐색
for (let i = 0; i < grade.length; i++) {
  let personal_sum = 0; // 학생 개개인의 총점
  for (let j = 1; j < grade[i].length; j++) {
    // 점수
    // console.log(grade[i][j]);
    sum += grade[i][j];
    personal_sum += grade[i][j];
  
  }
//-1 은 과목수에서 이름을 제외해야하므로  뺀거임  숫자만 합산 평균 낼거라서 ..
  const personal_avg = personal_sum / (grade[i].length-1);
  console.log("%s의 총점은 %d 이고 평균은 %d 입니다", grade[i][0],personal_sum,personal_avg);
}
console.log("모든학생의 총점은 %d 입니다", sum);

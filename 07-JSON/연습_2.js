console.group("2-1 번 문제");
const exam = {
  철수: [89, 82, 79, 91],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 76, 81, 83],
};

const result = {}; //총합, 평균받기
for (const student in exam) {
  const score = exam[student];
  const sum = score.reduce((acc, score) => acc + score, 0); // 총점 계산
  // 평균 계산

  result[student] = {
    sum: sum,
    avg: avg,
  };
  console.log(`${student}의 총점은 ${sum}점 이고 평균은 ${avg}점 입니다.`);
}
console.groupEnd();

console.group("2-2 번 문제");

const exam = {
  철수: [89, 82, 79, 91],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 76, 81, 83],
};

const result = []; // 수학 점수 저장

for (const student in exam) {
  const score = exam[student];
  const mathScore = score[2]; // 수학 점수
  result.push(mathScore); // 수학 점수를 배열에 추가
}

const total = result.reduce((acc, score) => acc + score, 0); // 총점 계산
const avg = total / result.length; // 평균 계산

// 각 학생의 수학 점수를 출력합니다.
for (const student in exam) {
  const score = exam[student];
  const mathScore = score[2]; // 수학 점수
  console.log(`${student}의 수학 점수는 ${mathScore}점 입니다.`);
}

console.log(`수학 점수 총점은 ${total}점 이고 평균은 ${avg.toFixed(2)}점 입니다.`);

console.groupEnd();
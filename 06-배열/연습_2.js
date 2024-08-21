console.group("2번문제");
let grade = [75, 82, 91];
let sum = 0;

for (let i = 0; i < grade.length; i++) {
  sum += grade[i];
}
console.log("총합 %d ", sum);

let avg = sum / grade.length;
console.log("평균 %d", avg);
console.groupEnd();

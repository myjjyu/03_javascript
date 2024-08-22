let grade = [75, 82, 91];
let sum = 0;

for (let i = 0; i < grade.length; i++) {
  sum += grade[i]; // 미리준비한 합계변수에 순서대로 더하기
}
console.log("총합 %d ", sum);

let avg = sum / grade.length;
console.log("평균 %d", avg);



////////////////////////////////////////강사풀이////////////////////////////////////////


let grade = [75, 82, 91];
let sum = 0;

for (const p of grade){
  sum += p;
}

console.log("총합 %d ", sum);

let avg = sum / grade.length;
console.log("평균 %d", avg);
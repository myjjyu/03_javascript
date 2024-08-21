let student = [7, 5, 5, 5, 5, 10, 7];
let before = 4500;
let after = 5200;
let sum = 0;

for (let i = 0; i < student.length; i++) {
  if (i < 4) {
    sum += student[i] * before;
  } else {
    sum += student[i] * after;
  }
}
console.log(sum);
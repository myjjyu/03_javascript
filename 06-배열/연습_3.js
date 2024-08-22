let time = [7, 5, 5, 5, 5, 10, 7];
let before = 4500;
let after = 5200;
let sum = 0;

for (let i = 0; i < time.length; i++) {
  if (i < 4) {
    sum += time[i] * before;
  } else {
    sum += time[i] * after;
  }
}
console.log(sum);

// 요일데이터를 처리할때는 배열인덱스로 처리함
// 일요일 = 0
// 토요일 = 6

////////////////////////////////////////강사풀이////////////////////////////////////////

let time = [7, 5, 5, 5, 5, 10, 7];
let sum = 0;

for (let i = 0; i < time.length; i++){
  sum  += time[i] * ((i < 4) ? 4500 : 5200 );
}
console.log(sum);
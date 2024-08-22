const arr = [5, 3, 2, 8, 9];

const data = [5, 3, 2, 8, 9];
console.log(data);

const p = data.length % 2 == 0 ? data / 2 : (data.length - 1) / 2;

for (let i = 0; i < p; i++) {
  const k = data.length - i - 1;

  const tmp = data[i];
  data[i] = data[k];
  data[k] = tmp;
}
console.log(data);


//  역순배치 공시 
// 1) 원소가 짝수개 일 경우 : 배열길이  /2 만큰만 반복
// 2) 원소가 홀수개 이 경우 : (배열길이-1) / 2만큼 반복
// 3) i번째와 길이 -i -1 번째를 맞교환

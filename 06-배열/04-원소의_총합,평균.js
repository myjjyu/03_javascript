const data = [10, 20, 30, 40, 50];
// 총합계 구할때는 합산 받을 변수 0으로 초기화 해놓고 반복 실행
let sum =0;
// 배열의 모든 원소에 대한 반복문 구성
for (let i =0; i< data.length; i++){
  // 배열을 받을땐 [] // i 번째 원소를 sum에 누적합산
  sum += data[i];
}
console.log("data의 총합: %d", sum);


//평균은 총합을 원소의 길이로 나눈 값

const avg = sum / data.length;
console.log("data의 평균 : %d", avg);
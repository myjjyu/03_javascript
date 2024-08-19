let b =10;

while (b > 0) {
  console.log("b=%d",b);
  b -=2;
  // b --;  였으면 1씩감소
}


// 최종값 은 0이다

let result = 1; // 이진수의 개수
let informationCount = 2; // 표현 가능한 정보의 수

while (result < 10) {
    result++;
    informationCount *= 2;
    console.log(`이진수 ${result}개는 ${informationCount}개의 정보를 표시가능`);
}




for (let i = 1; i <= 10; i++) {
  result *= 2;
  console.log(`이진수 ${i}개는 ${result}개의 정보를 표시 가능`);
}
function myGame(n) {
  let clapCount = 0; // 총 박수 횟수

  for (let i = 1; i <= n; i++) {
    const str = i.toString(); // 숫자를 문자열로 변환
    let claps = 0; // 현재 숫자에서의 박수 횟수

    // 문자열을 순회하면서 '3', '6', '9'가 있을 경우 박수 횟수 증가
    for (let char of str) {
      if (char === '3' || char === '6' || char === '9') {
        claps++;
      }
    }

    // 박수 횟수에 따라 출력
    if (claps > 0) {
      console.log('짝'.repeat(claps));
      clapCount += claps; // 총 박수 횟수 증가
    } else {
      console.log(i);
    }
  }

  console.log(`박수를 총 ${clapCount}번 쳤습니다.`);
  return clapCount;
}

// 예시 호출
myGame(35);

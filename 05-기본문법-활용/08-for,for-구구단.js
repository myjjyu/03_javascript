//이중 반복문 구구단//

for (let i = 2; i < 10; i++) {
  //2~9 까지 반복 : 2단부터 9단까지
  console.group("%d단", i);

  for (let j = 1; j < 10; j++) {
    //1~9 까지 반복
    console.log("%d x %d = %d", i, j, i * j);
  }
  console.log(""); // 단 사이 공백으로 나눠주려고 넣음
  console.groupEnd();
}


// 희망하는 단만 따로  구하기 //

for (let i = 1; i < 10; i++) { // 1씩 증가 
  const j = i * 5; // 5단 선택함
  console.log("5 x %d = %d",i, j);
}



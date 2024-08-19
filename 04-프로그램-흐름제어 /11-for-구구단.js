for(let y =1; y <10; y++){
  const z =y *7;
  console.log("7 x %d =",y,z);
}


//구구단
for (let y = 1; y <= 9; y++) {
  for (let i = 1; i <= 9; i++) {
    const z = y * i;
    console.log(`${y} * ${i} = ${z}`);
  }
  console.log(); // 각 단 사이에 빈 줄 추가
}
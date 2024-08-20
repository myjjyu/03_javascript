for(let i=0; i<5; i++){
  console.group("i에 대한 반복 수행 시작 >> i=" +1);
  for (let j=0; j<i+1; j++){
console.log(`${i},${j}`);
  }
  console.groupEnd();
}
  
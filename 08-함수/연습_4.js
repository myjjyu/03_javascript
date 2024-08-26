  // 행단위로 재귀호출하라
function printStar(max, current=1){ 

  if(current>max){ // 행의 위치가 max보다 크면 처리중단하라 
    return;
  } 
  console.log("*".repeat(current));

  printStar(max, current+1);
}
printStar(5);


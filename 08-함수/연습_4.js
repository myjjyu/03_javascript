function printStar(max, current=1){
  if(current>max){
    return;
  }
  console.log("*".repeat(current));

  printStar(max, current+1);
}
printStar(5);


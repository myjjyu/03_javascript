function printStar(max, current=5){
  if(current<=0){
    return;
  }
  console.log("*".repeat(current));

  printStar(max, current-1);
}
printStar(5);


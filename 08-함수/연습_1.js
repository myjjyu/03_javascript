function printStar(max) {
  for (let i = 1; i <= max; i++) { //1~5지 돌아랏
    let str = "";
    for (let j = 0; j < i; j++) { // 별찍히는
      str += "*";
    }
    console.log(str);
  }
}

printStar(5);


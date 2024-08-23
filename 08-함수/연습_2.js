function printRevStar(max) {
  for (let i = 0; i < max; i++) { // 5~1까지 줄어들어랏
    let str = "";
    for (let j = 0; j <max - i; j++) { //i 값만큼 별추가
      str += "*";
    }
    console.log(str);
  }
}

printRevStar(5);

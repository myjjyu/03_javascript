let myarr = [5 * 5];

for (let i = 0; i < 5; i++) {
  myarr[i] = [];
  for (let j = 0; j < 5; j++) {
    if (i === j) {
      myarr[i][j] = 1;
    } else {
      myarr[i][j] = 0;
    }
  }
}

console.log(myarr);


////////////////////////////////////////강사풀이////////////////////////////////////////

let myAarr = new Array(5);

for (let i = 0; i < 5; i++) {
  myAarr[i] = new Array(5);

  // 내부 루프에서 변수를 i가 아닌 j로 변경합니다.
  for (let j = 0; j < myAarr[i].length; j++) {
    if (i === j) {
      myAarr[i][j] = 1;
    } else {
      myAarr[i][j] = 0;
    }
  }
}

console.log(myAarr);

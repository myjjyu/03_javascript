let myarr = [5*5];
for (let i = 0; i < 5; i++) {
  myarr [i] = [];
  for (let j = 0; j < 5; j++) {
    if (i === j) {
      myarr [i][j] = 1; 
    } else {
      myarr [i][j] = 0; 
    }
  }
}

  console.log(myarr);

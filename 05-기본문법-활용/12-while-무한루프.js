let y = 0;

while(true){
  y++;

  if (y % 2 == 0){
    continue;
  }


if(y > 10){

  break;
}

console.log("hello world ::: %d", y);
}


// 제어문 안쓰고 간편한 방법 

for(let y = 0; y<10; y++){
  if(y % 2 === 1)
  //또는  if(y % 2 !== 0)
    console.log(y);
}


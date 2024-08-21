const myArr = [
  [1,2,3],
  [4,5,6]
];
for(let i =0; i<myArr.length; i++){
  console.log(i + "번째 행-----");
  console.log(myArr[i]); // 행관련

  for(let j=0; j<myArr[i].length; j++){// 행안에 열을담당하고있는(원소)관련
console.log(myArr[i] [j]); // 행안에 열을담당하고있는(원소) 출력
  }
  console.groupEnd();
}


// for~of 문을 활용한 탐색 (잘 안씀)
console.group("2차 배열의 탐색 ");

const myArr2 = [
[1,2,3],
[4,5,6]
];

for(let item of myArr2){
  console.log(item);

  for(let sub of item){
    console.log(sub);
  }
}

console.groupEnd();
// 배열을 정렬하는 버블 정렬(Bubble Sort) 알고리즘을 구현
// 두개씩 묶어서 비교


const data = [3, 5, 1, 4, 2];
console.log(data);
console.log("");

for (let i = 0; i < data.length - 1; i++) {
 

  //i는 0부터 시작하여 data.length - 1까지 반복합니다.
  // 이유는 i가 배열의 각 원소를 기준으로 설정하며, 가장 마지막 원소는 이미 정렬된 상태가 되기 때문입니다.
  for (let j = 0; j < data.length - 1 - i; j++) {


    //  j는 0부터 시작하여 data.length - 1 - i까지 반복합니다.
    // j는 i 이후의 원소들을 비교합니다.
    // data.length - 1 - i로 설정하여 이미 정렬된 부분을 제외하고 비교합니다.
    if (data[j] > data[j + 1]) { // 두개씩 묶어서 비교했기때문에 +1 한거임
      const tmp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = tmp;
      //버블 정렬 알고리즘에서 인접한 두 원소를 비교하고 교환하는 방법을 구현
    
    }
    console.log("%d회차 : ", i+1,data);
  }
}
console.log("");
console.log(data);

// 부등호 방향 > 오름 차순
//< 내림치순



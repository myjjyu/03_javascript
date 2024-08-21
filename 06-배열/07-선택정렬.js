// 배열 data를 오름차순으로 정렬하는 버블 정렬(Bubble Sort) 알고리즘의 변형


const data = [3,5,1,4,2];
console.log(data);

for (let i = 0; i <data.length-1; i++){ 
  //i <data.length-1 : i = 0부터 시작하여 data.length - 1까지 반복합니다. (마지막 원소는 제외)
  for(let j = i +1; j<data.length; j ++){ 
    //j는 i보다 뒤에 있는 원소를 비교합니다. 이 반복문은 현재 i에 설정된 원소와 그 뒤의 모든 원소를 비교합니다.
    // j = i + 1부터 시작하여 배열의 끝까지 반복합니다.
    if (data[i] > data[j]){
      const tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
      console.log("%d회차 : ", i+1,data);
      // if (data[i] > data[j])는 현재 i 위치의 원소가 j 위치의 원소보다 큰 경우를 검사합니다.
      // 만약 data[i]가 data[j]보다 크다면, 두 원소의 위치를 교환합니다.
      // 교환 방법은 tmp라는 임시 변수를 사용하여 두 원소의 값을 서로 바꾸는 것입니다.
      //배열의 원소를 교환하는 방법
    }
  }
}
console.log(data);


// 부등호 방향 > 오름 차순 
//< 내림치순

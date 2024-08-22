const check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for (let i = 0; i < check_list.length; i++) {
  check_list[i] = !check_list[i];
} // 0~4   //1~5
console.log("after --> " + check_list);


//조건이 불리언을 구하는 속성일때는 조건식에 결과 자체를 바로 걸기 앞에 부정만 붙이면됨
// let k = !k;
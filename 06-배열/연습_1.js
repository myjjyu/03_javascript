console.group("1번문제");

const check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for (let i = 0; i < check_list.length; i++) {
  check_list[i] = !check_list[i];
} // 0~4   //1~5
console.log("after --> " + check_list);

console.groupEnd();
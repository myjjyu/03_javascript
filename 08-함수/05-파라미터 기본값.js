//기본 파라미터 정의해줌 

function bar(x = 1, y = 2) {
  console.log("x =" + x + ", y=" + y);
  let result = x + y;
  console.log("result=" + result);
}

bar(100,200);
bar(500);
bar();

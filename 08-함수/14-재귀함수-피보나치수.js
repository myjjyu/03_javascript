// 피보나치수열 에서 10번째 항목이 무엇인지 출력하기

function fibonacci(n){
  if(n < 2){
    return n;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

console.log(fibonacci(10));

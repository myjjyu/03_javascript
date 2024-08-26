// 성공과 실패했을때 어떻게 변화하는지 코드흐름 체킹하기
function random(n1, n2){
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

function getLuckyResult(){
  return new Promise(function(resolve, reject) {
setTimeout(()=> {
  console.log("당신의 추첨 결과는...??");
  const lucky = random(1,9);

  if(lucky % 2 ==0){
    resolve({msg: "당첨입니다", a:1, b:2, c:3});
  }else {
    reject({msg: "꽝",  b:-1, e:-2});
  }
}, 1000);
  });
}

(async () => {
  // 비동기 처리가 성공했을때 전달되는 결과를 저장할 변수
  let result = null;

  try {
    // 비동기처리 호출
    result = await getLuckyResult();
  }catch (e){
    console.error("%s, d=%d, e=%d", e.msg, e.d, e.e);
    return;
  }finally {
    console.log("fin :");
  }
  console.error("%s, a=%d, b=%d, c=%d", result.msg, result.a,result.c);
})();
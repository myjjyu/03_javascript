// 비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행할수 있는 기법
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

const mypromise = getLuckyResult();
mypromise.then(({msg, a, b, c}) =>{
  console.log("%s,a=%d,b=%d,c=%d", msg, a, b, c);
}).catch(({msg,d,e})=> {
  console.log("%s,d=%d,e=%d", msg, d, e);
}).finally(()=>{
  console.log("fin :)");
});
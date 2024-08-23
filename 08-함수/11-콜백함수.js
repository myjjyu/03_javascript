

function something(x, y, cb){
  const result = cb(x, y);
  console.group(cb);
  console.log(x +" 와"+ y + "의 연산 결과는 " + result);
  console.groupEnd();
}

// 콜백함수를  직접 함수 정의
function plus(a,b) {return a+b;}
function minus(a,b) {return a-b;}

something(100,50, plus);
something(100,50, minus);

// 콜백함수를 익명함수 형태로 전달하기
something(200,100, function(a,b){
  return a*b;
})

something (200,100, function (a,b){
return a/b;
})

// 익명함수를 화살표 함수로 사용
something (5,7,(a,b) =>{
  for(let i = a; i < b; i++){
    console.log("7x"+ i + "=" + (i*7));
  }
  });

  // 함수 로직이 한줄인 경우 : 축약된 형태 
  something (5,7,(a,b) =>{
    // console.log(a + b);
    return a+b;
    });

    something (5,7,(a,b) => console.log (a + b));
  
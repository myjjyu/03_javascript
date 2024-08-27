var max = Math.max(100,123,456,789,1000);
console.log(" 최대값 :" + max);

////응용 최대값 구하기///////////////////////////////////////////
const k = ["1","2","3"];
var max = Math.max(...k);
console.log(" 최대값 :" + max);
////////////////////////////////////////////////////////////////////////////////

var min = Math.min(100,123,456,789,1000);
console.log(" 최소값 :" + min);

var num1= 3.7146;
console.log(" 소수점 반올림 :" + Math.round(num1));

console.log(" 소수점 올림 :" + Math.ceil(num1));
console.log(" 소수점 내림 :" + Math.floor(num1));

var num2= -123;
console.log(" 절대값 :" + Math.abs(num2));

console.log(" 난수 :" + Math.random());


function random(n1, n2){
  return parseInt(Math.random() * (n2 -n1 +1)) +n1;
}

var rnd= random(0,9);
console.log(" 0~9 사이의 난수  :" + rnd);

var auth= "";
for(var i = 0; i < 5; i++){
  auth += random(0,9);
}
console.log("인증번호 :" + auth);
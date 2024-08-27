// 변수 형식으로 문자열 만들기
const str1 = "Hello World";
console.log(str1);


// 객체 생성 방식으로 문자열 만들기
// const str2 = new string("Hello Javascript");
// console.log(str2);

// 기능을 확인하기 위한 문자열의 선언 
const msg = "Life is too short, You need Javascript";
console.log("문자열 :" + msg);

const len  = msg.length;
console.log("문자열의 길이 : " + len);

const str2nd = msg.charAt(2);
console.log("두번째 글자 :" + str2nd);

// 모든 문자열은 그 자체로 배열처럼 취급될수 있다
console.log("두번째 글자 :" + msg[2]);

const p1 = msg.indexOf("f");
console.log("f가 처음 나따타는 위치  :" + p1);
console.log("z가 처음 나따타는 위치  :" + msg.indexOf("z"));

console.log("short 가 처음 나타나는 위치 :" + msg.indexOf("short"));


const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i", p2 +1);
console.log("i가 첫번째로 나타나는 위치  :" + p2);
console.log("i가 두번째로 나타나는 위치  :" + p2);


////// indexof 응용버전 ///////////////////////////////////////////////////
userInput = "사용자가 입력한 어떠한 내용...";
ignores = ["슈방", "졸려"];

for(const i of ignores){
  if (userInput.indexOf(i) > -1){
    console.log("사용할수 없는 단어가 입력되었습니다");
    break;
  }
} 
////////////////////////////////////////////////////////////////////////////////
const p4 = msg.lastIndexOf("a");
console.log("a의 마지막 위치 :" + +p4);


// 응용 
if(msg.indexOf("Hello")> -1){
  console.log("Hello 가 포함됨");
}else {
  console.log("Hello 가 포함되지 않음");
}

const substring1 = msg.substring(0, 17);
console.log("문자열 자르기 :" + substring1);

const substring2 = msg.substring(19);
console.log("문자열 자르기 :" + substring2);

const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환:" + up);

const low = msg.toLowerCase();
console.log("모든 글자의 소문자 변환:" + low);

//문자열의 앞/뒤 공백 지우기
const src1 = "Hello World";
const src2 = src1.trim();
console.log(src1);
console.log(src2);


const txt = "HTML, CSS, JAVASCRIPT";
const arr = txt.split (",");
console.log(arr);


const txt2 = txt.replace(",", "$");
console.log(txt2);

const test = "Hello Javascript, World Javascript";
console.log(test.replaceAll("Javascript", "자바스크립트 "));

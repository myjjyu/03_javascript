const username = "자바스크립트";
const age = '20'; 
const userid = 'js123';

const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;
if (!pattern1.test(username)){
  console.log('이름은 한글만 입력 가능합니다')
}
const pattern2 = /^[0-9]*$/;
if (!pattern2.test(age)){
  console.log('나이는 숫자만 입력 가능합니다')
}


const pattern3 = /^[a-zA-Z0-9]*$/;
if (!pattern3.test(userid)){
  console.log('아이디는 영어+숫자 조합으로만 입력 가능합니다')
}

if (userid.length > 20){
  console.log('아이디는 최대 20자 까지만 입력 가능합니다')
}
console.log('검사완료!!');

// 아무 문제없기 때문에 결과값은 검사완료!! 만 나옴

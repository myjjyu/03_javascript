// 이메일 주소를 변수에 저장
var email = "leekh4232@gmail.com";

// @를 기준으로 아이디와 도메인 분리
var parts = email.split('@');
var username = parts[0];
var domain = parts[1];

// 결과 출력
console.log(username);
console.log(domain);

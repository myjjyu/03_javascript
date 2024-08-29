// 주민등록번호와 현재 연도 저장
var ssn = "020517-3******";
var now_year = new Date().getFullYear();

// 생년월일 추출
var birthYear = parseInt(ssn.slice(0, 2), 10); // 주민번호 앞 2자리(년)
var birthMonth = parseInt(ssn.slice(2, 4), 10); // 주민번호 다음 2자리(월)
var birthDay = parseInt(ssn.slice(4, 6), 10); // 주민번호 다음 2자리(일)

// 2000년대생인지, 1900년대생인지 확인
if (ssn[7] === "1" || ssn[7] === "2") {
  birthYear += 1900;
} else if (ssn[7] === "3" || ssn[7] === "4") {
  birthYear += 2000;
}

// 나이 계산
var age = now_year - birthYear;

// 성별 확인
var gender = ssn[7] === "1" || ssn[7] === "3" ? "남자" : "여자";

// 결과 출력
console.log(birthYear +"년 " +birthMonth +"월 " +birthDay +"일에 태어난 " +age +"세 " +gender +" 입니다."
);

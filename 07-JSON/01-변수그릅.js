const student = {
  studno: 10101,
  grade : 1,
  nanme : "학생1",
  phoneno : "010-123-4567"
};

//각 데이터  출력하기
// 데이터에 접근하는 기본적인 방법  객체이름 . 하위정보이름
console.group("출력 type1");
console.log("학번 : " + student.studno);
console.log("학년 : " + student.grade);
console.log("이름 : " + student.nanme);
console.log("연락처 : " + student.phoneno);
console.groupEnd();
//json 의 key 이름을 배열의 인덱 처럼 활용



console.group("출력 type2");
console.log("학년 : " + student['studno']);
console.log("학번 : " + student['grade']);
console.log("이름 : " + student['name']);
console.log("연락처 : " + student['phoneno']);
console.groupEnd();

//접근하고자 하는 하위변수의 이름을 동적으로 설정할 경우 type2활용됨


const keyName = "phoneno";
console.log(student[keyName]);

//json 데이터 탐색하기 (1)

// key 배열로 반환하는 명령
const keys= Object.getOwnPropertyNames(student);
console.log(keys);

//추출한 key 이름은 배열이므로 반목문 처리가 가능하다
for(const k of keys){
  console.group(k);
  //추출된 key 이름값 k 를 활용하여 실 데이터 동적 접근 가능
  console.log(student[k]);
  console.groupEnd();
}
  // 제이슨 객체의 key 를 선언된 변수 k에 순차적으로 할당하며 모든 key 를 탐색한다 
  // 제이슨 객체의 key 를 선언된 변수 k 에 순차적으로 할당 하며 모든 key 탐색
  for(const k in student){
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
  }

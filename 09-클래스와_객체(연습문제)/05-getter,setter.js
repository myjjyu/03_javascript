class UserClass {
  // 은닉된 멤버변수 (숨겨진) 앞에 #을 붙인다
  #userName;
  #email;

  //멤버 변수에 값을 최초로 할당 (= 초기화 ) 하기 위한 생성자 함수
constructor(userName, eamil){
  this.#userName =  userName;
  this.#email=eamil;
}

// 멤버변수 #userName 에 값을 할당하기 위한 setter 함수
// setter : 객체가 저장하고 있는 프로퍼티의 값을 수정하는 용도
set userName(value){
if (!value){
  console.log("userName을 입력하세요");
  return;
}
this.#userName = value;
}
// 멤버변수 #userName 값을 반환하기 위한 getter 함수
//getter: 객체가 저장하고 있는 프로피터의 값을 조회하는 용도
get userName(){
  return this.#userName;
}


// 멤버면수 #email에 값을 할당하기 위한 setter 함수
set eamil(value){
  if (!value){
    console.log("email을 입력하세요");
    return;
  }
  this. #email = value;
}
//멤버변수 #email값을 반환하기 위한 getter 함수
get eamil(){
  return this.#email;
}

// 일반적인 기능을 수행하기 위한 메서드
login(){
  if(!this.userName || this.eamil){
    console.log("userName 과 email을 확인 하세요");
    return;
  }
  console.log("로그인 되었습니다 >>> userName=" + this.#userName + ", email="+ this.eamil);
}
}
const user = new UserClass("lee", "lee@naver.com");
user.login();

// setter 를 통한 값의 간접 할당
user.userName = "";
user.eamil = "";

user.userName = "helloworld";
user.eamil = "hello@world.com";
user.login();

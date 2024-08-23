class UserClass {
  // 은닉된 멤버변수 (숨겨진) 앞에 #을 붙인다
  #userName;
  #email;

  // 멤버 변수에 값을 최초로 할당 (= 초기화 ) 하기 위한 생성자 함수
  constructor(userName, email){
    this.#userName = userName;
    this.#email = email;
  }

  // 멤버변수 #userName 에 값을 할당하기 위한 setter 함수
  set userName(value){
    if (!value) {
      console.log("userName을 입력하세요");
      return;
    }
    this.#userName = value;
  }

  // 멤버변수 #userName 값을 반환하기 위한 getter 함수
  get userName(){
    return this.#userName;
  }

  // 멤버변수 #email에 값을 할당하기 위한 setter 함수
  set email(value){ 
    if (!value) { // 빈 값일 경우
      console.log("email을 입력하세요");
      return;  // 값을 설정하지 않고 종료
    }
    this.#email = value;  // 값이 빈 값이 아닐 때 설정
  }

  // 멤버변수 #email 값을 반환하기 위한 getter 함수
  get email(){
    return this.#email;
  }

  // 일반적인 기능을 수행하기 위한 메서드
  login(){
    if (!this.userName || !this.email) {
      console.log("userName 과 email을 확인 하세요");
      return;
    }
    console.log("로그인 되었습니다 >>> userName=" + this.#userName + ", email=" + this.email);
  }
}

// 객체 생성 및 메서드 호출
const user = new UserClass("lee", "lee@naver.com");  
user.login(); // 초기 상태의 로그인

// setter를 통한 값 설정
user.userName = ""; // 빈 문자열로 설정
user.email = ""; // 빈 문자열로 설정
user.login(); // 빈 값으로 로그인 시도

user.userName = "helloworld"; // 올바른 값으로 설정
user.email = "hello@world.com"; // 올바른 값으로 설정
user.login(); // 최종 상태의 로그인

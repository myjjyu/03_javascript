// 뉴키워드는 자동으로 실행되는 특수함수
// 객체지향 언어문 
// 코드보안에 안좋다,,,?

class MyUnit {
  name;
  speed;
  dps;

  constructor(name, speed, dps) { //함수이름

    // 임시 방어코드를 넣을수도 있다 
    // 멤버 변수에 직접적으로 변경을 못하게 하기 위해 에러를 넣어버림
    // 이걸 은닉성으라고함

    // if(speed < 0){
    //   throw new Error("에러입니다");
    // }

    this.name = name;
    this.speed = speed;
    this.dps = dps;
    console.log(
      `>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (speed = ${this.speed}), dpa=${this.dps}`
    );
  }
  move(where) {
    console.log(
      `${this.name}가 ${where}로 ${this.speed}의 속력으로 이동합니다 `
    );
  }
  attack(target) {
    console.log(
      `${this.name}가 ${target}에게 초당 ${this.dps}의 데미지를 입힙니다`
    );
  }
}

//단일객체사용
const marin = new MyUnit("Night", 5, 10);
marin.move('던전');
marin.attack('골램');


// // 객체배열 사용
const team = [
  new MyUnit("기사", 5,10),
  new MyUnit("힐러", 15,1),
  new MyUnit("성직자", 7,20)
];

for (const t of team){
t.move("던전");
t.attack("보스몹");
}
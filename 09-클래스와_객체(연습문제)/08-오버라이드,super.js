// 종족의 공통 특성을 갖는 클래스

class Terran {
  #name;
  #hp;
  #dps;

  // 모든 객체가 갖는 명사적 특성들을 멤버 변수로 정의
  constructor(name, hp, dps) {
    this.#name = name;
    this.#hp = hp;
    this.#dps = dps;
    console.log("[%s] 체력: %d, 공격력: %d", this.#name, this.#hp, this.#dps);
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get hp() {
    return this.#hp;
  }
  set hp(value) {
    this.#hp = value;
  }
  get dps() {
    return this.#dps;
  }
  set dps(value) {
    this.#dps = value;
  }

  // 객체가 수행해야 하는 동작들을 함수 형태로 정의
  move(position) {
    console.log(this.name + "가 " + position + "까지 이동합니다.");
  }

  attack(target) {
    console.log(this.name + "가 " + target + "을 공격합니다. 데미지: " + this.dps);
  }
}

class Marine extends Terran {
  attack(target) {
    console.log(
      this.name + "가 " + target + "에게 사격을 개시합니다. 데미지: " + this.dps
    );
  }
}

class Tank extends Terran {
  attack(target) {
    super.attack(target);
    console.log(">>>>>> 탱크 포격");
  }
}

class Firebat extends Terran {
  constructor(name) {
    super(name, 500, 50);
  }
}

const m = new Marine("해병1", 120, 30);
m.attack("질럿");

const t = new Tank("탱크1", 150, 70);
t.attack("드라군");

const f = new Firebat("화염방사병");
f.attack("적");


// Terran 클래스는 이름, 체력, 공격력을 가지고 있으며, 이동과 공격 기능을 정의합니다.
// Marine, Tank, Firebat 클래스는 Terran 클래스를 상속받아 각각의 유닛 특성에 맞게 공격 방법을 다르게 구현합니다.
// Marine, Tank, Firebat 객체를 생성하고, 각 객체가 특정 대상을 공격하는 동작을 출력합니다.
// 즉, 기본적인 유닛 속성을 가진 Terran 클래스를 만들어놓고, Marine, Tank, Firebat이 이 속성을 상속받아 자신만의 방식으로 공격하는 코드입니다.
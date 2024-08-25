class Student {
  // 생성자 정의
  constructor(department, studentId) {
    this._department = department; 
    this._studentId = studentId;
  }

  get department() {
    return this._department;
  }

  set department(value) {
    this._department = value;
  }

  get studentId() {
    return this._studentId;
  }

  set studentId(value) {
    this._studentId = value;
  }

  sayHello() {
    console.log(`나는 ${this.department}학과 ${this.studentId}학번 입니다.`);
  }
}

const stud = new Student("컴퓨터", 202004123);
stud.sayHello(); 

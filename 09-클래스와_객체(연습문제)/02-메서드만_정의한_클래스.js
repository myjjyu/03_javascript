// 비슷한 성격을 갖는 함수를 그룹화시킴
class Calc {
  plus(x, y) {
    return x + y;
  }
  minus(x, y) {
    return x - y;
  }
}

const c = new Calc();
console.log(c.plus(1,2));
console.log(c.minus(10,5));
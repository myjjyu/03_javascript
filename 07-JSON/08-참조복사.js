// 값 복사 --> 일반 변수끼리의 복사
let a = 100;
let b = a;
console.log("a =" + a + ", b=" +b);

//일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다.
a++
console.log("a =" + a + ", b=" +b);

// 참조복사 
// 배열, 제이슨 객체 끼리의 복사는 참조처리 된다 
// 원본을 수정하면 복사본도 함꼐 수정된다
const user ={
  name : "lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "kim";
console.log(user);
console.log(member);

const d1 =[1,2,3];
const  d2= d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);

//  배열 끼리의 값 복사 방법
const a1 =[1,2,3];
const a2 =new Array(a1.length);

for (let i = 0; i< a1.length; i ++){
  a2[i] = a1[i];
}

const a3 = a1.slice();
console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;
console.log(a1);
console.log(a2);
console.log(a3);

//json 의 깁은 복사 
const addr = {
  city : "서울",
  gu :"서초"
};

const copy = {};
for (let key in addr){
  copy[key] = addr [key];
}

console.log(addr);
console.log(copy);

addr.gu = '강남';

console.log(addr);
console.log(copy);

const copy2 = {};
Object.assign(copy2, addr);
console.log(copy2);
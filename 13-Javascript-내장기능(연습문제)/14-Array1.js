// 배열의 원소를 추가 , 삭제 , 변경하는 방법

const data = [10,20,30,40,50];

// 배열 맨끝요소 추가
data.push(60,70);
console.log(data); // 10~70 까지 출력

// 마지막 요소 리턴하고 제거
const k = data.pop(); 
console.log(k); //70 k로 리턴함 // 원래배열에서 삭제됨
console.log(data); // 10~60

// 맨 앞 요소 리턴하고 제거
const x = data.shift(); 
console.log(x); // 10
console.log(data); //20~60

// 맨 앞 요소 추가 
data.unshift(0,10); 
console.log(data); //0~60

//2번째 위치부터 3개 잘라서 반환 하고 원본에서 제거
const z = data.splice(2,3); 
console.log(z); // 
console.log(data); 


// 0 번째 위치부터 2개를 제거 하고 그위에 다른요소 배치 
// 제거한수보다 추가되는 원소수가 많을경우 배열 확장
// 제어한 수보다 추가되는 원소가 적을경우 배열축소

data.splice(0,2, 'a','b','c'); 
console.log(data); 

// 삭제할 원소의 수를 0으로 지정하면 중간삿ㅂ입 효과있음
data.splice(3,0, 'd','e'); 
console.log(data);


//결합하여 새로운배열 반환
const a = [1,2];
const b = [3,4,5];
const c = [6,7,8,9];
const d = a.concat(b,c);
console.log(d);

// 배열에서 원하는 원소가 있는지 여부 확인하기 
let arr1 = [1, 0, false];

// 정확한 위치확인하기
console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null)); // 발견하지 못하면 -1 반환

// 있는지 없는지 확인만! 하고 싶다면? 
console.log(arr1.includes(1));
console.log(arr1.includes(100));



const arr2 = [NaN];
console.log(arr2.indexOf(NaN));
console.log(arr2.includes(NaN));
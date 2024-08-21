const data = [1, 5, 2, 4, 3];
console.log(data);

const p = data.length % 2 == 0 ? data / 2 : (data.length-1) /2;

for (let i = 0; i < p; i++){
  const k =data.length -i -1;

  const tmp = data[i];
  data[i] = data[k];
  data[k] = tmp;
}

console.log(data);




// 쉬운방법

const data = [1, 5, 2, 4, 3];
console.log("원본 배열:", data);

// 배열 뒤집기
data.reverse();
console.log("뒤집힌 배열:", data);
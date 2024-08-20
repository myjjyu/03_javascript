const data = [3,5,1,4,2];
console.log(data);

for (let i = 0; i <data.length-1; i++){
  for(let j = 0; j<data.length-1-i; j ++){
    if (data[i] > data[j+1]){
      const tmp = data[i];
      data[i] = data[j+1];
      data[j+1] = tmp;
    }
  }
}

// 부등호 방향 > 오름 차순 
//< 내림치순


console.log(data);
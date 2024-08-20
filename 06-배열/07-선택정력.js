const data = [3,5,1,4,2];
console.log(data);

for (let i = 0; i <data.length-1; i++){
  for(let j = i +1; j<data.length; j ++){
    if (data[i] > data[j]){
      const tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
  }
}

// 부등호 방향 > 오름 차순 
//< 내림치순


console.log(data);
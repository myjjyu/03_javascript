console.group("12번문제");
let namaer = ["재석", "민영", "종민", "광수", "승기", "새정"];
let point = [82, 91, 54, 62, 88, 90];
// console.log(namaer[2]);
let myArr=[namaer,point];

console.log(myArr);

for (let i = 0; i < namaer.length ; i++) {
  for(let j = i +1; j<namaer.length; j ++){ 
    if (namaer[i] > namaer[j]){
      const tmp = namaer[i];
      namaer[i] = namaer[j];
      namaer[j] = tmp;
    }
  }
}
console.log(namaer);

console.groupEnd();
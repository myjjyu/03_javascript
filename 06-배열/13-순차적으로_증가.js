// 달력만들기

let data = new Array(6);

for (let i = 0; i < data.length; i++) {
  data[i] = new Array(7);
}

console.log(data);

//1씩 증가할 값
let counter = 1;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if ((i == 0 && j < 3) || counter > 30) {
      data[i][j] = 0;
    } else {
      data[i][j] = counter;
      counter++;
    }
  }
}

console.log(data);

//출력하기
// \t -> 탭키
// \n -> 줄바꿈


// html 안 자바스크립트에서 열어야함


let str = "<table>";
for (let i = 0; i < data[i].length; i++) {
  if (data[i][j] == 0) {
    str += "<td>/<td>";
    {
      str += "<td>" + data[i][j] + "</td>";
    }
  }
  str += "</tr>";
}


str += "</table>";

console.log(str);


let namaer = ["재석", "민영", "종민", "광수", "승기", "새정"];
let point = [82, 91, 54, 62, 88, 90];

for (let i = 0; i < point.length; i++) {
  for (let j = i + 1; j < point.length; j++) {
    if (point[i] < point[j]) {
      // 점수 교환
      const tmpPoint = point[i];
      point[i] = point[j];
      point[j] = tmpPoint;

      // 이름 교환
      const tmpName = namaer[i];
      namaer[i] = namaer[j];
      namaer[j] = tmpName;
    }
  }
}

for (let i = 0; i < namaer.length; i++) {
  console.log(namaer[i]);
}

const days = ['일','월', '화','수', '목','금','토']; // 일요일 = 0 // 토요일 = 6

const date1 = new Date();

//년, 월, 일 , 시간, 분, 초 리턴 받기
const yy = date1.getFullYear();


//0 => 1월 // 11=> 12를 의미함 그래서 희망 월을 하고자 할때는 +1을 해줘야함
const mm = date1.getMonth() +1; 
const dd =  date1.getDate();

const i = date1.getDay();
const day = days[i];

const hh = date1.getHours(); // 시
const mi = date1.getMinutes(); // 분
const ss = date1.getSeconds(); // 초

// let result = yy + '-' + mm + '-' + dd + '' + day + '요일 ' + hh + ':' + mi + ':' +ss;
let result = (`${yy}-${mm}-${dd}${day}요일${hh}:${mi}:${ss}`);
console.log(result);


console.log(date1.toDateString());
console.log(date1.toISOString()); // 국제 표준시간

console.log(date1.toLocaleString());
console.log(date1.toLocaleString('de-De'));
console.log(date1.toLocaleString('ko-KR'));

console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-De'));
console.log(date1.toLocaleDateString('ko-KR'));

console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString('de-De'));
console.log(date1.toLocaleTimeString('ko-KR'));


let date2 = new Date(2021,9,5);
console.log(date2.toLocaleString('ko-KR'));

let date3 = new Date(2021,9,5,21,19,31); //시 분 초 까지 다 적음
console.log(date3.toLocaleString('ko-KR'));


date3.setYear(2010);
date3.setMonth(1);
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));
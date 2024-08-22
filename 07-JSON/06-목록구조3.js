//가장 일반적인 형탱의 목록 구조 

const bbs ={
title : "공지사항",
count : 4,
item : [
  {id : 1, subject : '첫 번째 게시물 제목'},
  {id : 2, subject : '두 번째 게시물 제목'},
  {id : 3, subject : '세 번째 게시물 제목'},
  {id : 4, subject : '네 번째 게시물 제목'}
]
};

console.log("게시판 이름 : " + bbs.title);
console.log("전체 게시물 수  : " + bbs.count);

//일반 for 문
console.log("일반 for문 ");
for (let i=0; i<bbs.item.length; i++){
  console.log("["+bbs .item[i].id+"]" +bbs.item[i].subject);
}
console.groupEnd();

//for~of 문
console.group("for~of 문");
for(let k of bbs.item){
  console.log("["+k.id+"]" +k. subject);
}

console.groupEnd();
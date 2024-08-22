function doLogin(userId, userPw){
  if (!userId)
  {
    return "아이디를 입력하세요";
  }
  if (!userPw)
    {
return "비밀번호를 입력하세요";
    }

    return "로그인을 수행함";
}

console.log(doLogin ("","")); // 아이디를 입력하세요 후 빠져나옴
console.log(doLogin ("hello","")); // 아이디는 있으니까 비밀번호로 가서 비밀번호 입력하세요 하고 빠져나옴 
console.log(doLogin ("hello","world")); // 둘다 있으니까 if문 실행 안하고 로그인을 수행함 실행
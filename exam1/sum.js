function examOne(first, second) {
  //매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오.
  //"문자열 데이터를 입력하셨습니다."
  if (typeof first === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  } else if (typeof second === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
  } else {
    let a = first + second;
    console.log(a);
  }
}
console.log(examOne(2, 3)); //question 1 덧셈 로직 만들기

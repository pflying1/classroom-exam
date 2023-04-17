function examThree(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  //length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let array = str.split("").reduce((count) => {
      return count + 1;
    }, 0);
    return array;
  } else {
    console.log("문자열을 입력해주세요.");
  }
}
console.log(examThree("hello")); //Question 3 문자열 길이 구하기

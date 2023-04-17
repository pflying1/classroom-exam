function examTwo(first, second, third) {
  //숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오
  if (
    typeof first === "number" ||
    typeof second === "number" ||
    typeof third === "number"
  ) {
    let b = first * second * third;
    console.log(b);
  }
}
console.log(examTwo(2, 3, 4)); //Question 2 곱셈 로직 만들기

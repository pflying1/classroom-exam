function examFive(array) {
  //배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if (Array.isArray(array)) {
    if (array.length === 0) {
      console.log("배열안이 비었음");
    } else {
      let sumValue = array.reduce((count, arrAll) => count + arrAll);
      return sumValue;
    }
  } else {
    console.log("배열이 아닙니다.");
  }
}

console.log(examFive([1, 2, 3])); //Question 5 배열값 누산(총합)하기

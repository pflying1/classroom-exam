function examFive(array) {
  //배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if (Array.isArray(array)) {
    if (array.length === 0) {
      console.log("배열안이 비었음");
    } else {
      const maxValue = array.reduce((count, cur) => {
        return Math.max(count, cur);
      }, 0);
      return maxValue;
    }
  } else {
    console.log("배열이 아닙니다.");
  }
}
console.log(examFive([1, 2, 3]));

function examFour(array) {
  //배열만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if (Array.isArray(array)) {
    if (array.length === 0) {
      console.log("배열안이 비었음");
    } else {
      const minValue = array.reduce((count, cur) => {
        return Math.min(count, cur);
      });
      return minValue;
    }
  } else {
    console.log("배열이 아닙니다.");
  }
}
console.log(examFour([3, 1, 4, 2])); //Question 4 최솟값 판별하기

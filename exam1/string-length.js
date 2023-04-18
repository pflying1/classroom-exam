//for of 써도 되는데 reduce도 콜백사용하는 메서드라서 사용해봤습니다.
//최솟값 구할때도 reduce
function examThree(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  //length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let array = str.split("").reduce((count) => count + 1, 0);
    return array;
  } else {
    console.log("문자열 아님");
  }
}
console.log(examThree("hello")); //Question 3 문자열 길이 구하기

//map도 한번 써보고 싶어서 써봤습니다.
function map(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  //length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let array = str.split("").map((count) => count, 0);
    return array;
  } else {
    console.log("문자열 아님");
  }
}
console.log(map("hello"));

function filter(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  //length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let array = str.split("").filter((count) => {
      return count === "l";
    }, 0);
    return array;
  } else {
    console.log("문자열 아님");
  }
}
console.log(filter("hello"));

function forEach(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  //length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if (typeof str === "string") {
    let array = str.split("").forEach((arrAll) => {
      return console.log(arrAll);
    });
    return array;
  } else {
    console.log("문자열 아님");
  }
}
console.log(forEach("hello"));

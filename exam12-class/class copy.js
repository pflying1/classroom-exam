const calcu = require("./calculator.js");

const a = 10;
// const a = 10.5;
const b = 20;
// const b = 20.3;

const calculator = new calcu();

console.log(calculator.add(a, b));
console.log(calculator.minus(a, b));
console.log(calculator.divide(a, b));
console.log(calculator.multiply(a, b));

// Q.1 사칙 연산 모듈을 4개 만들어서 import(가져오기) 후 호출한 예시입니다.
// Q.1 아무래도 이렇게 하나하나 가져오는 것은 가독성면에서나 사용성면에서 좋아보이지 않습니다.
// Q.1 이것을 하나의 class 형태의 모듈로 만들어 관리할 수 있을까요?

//Q.2 class 에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 결과를 반환하게끔 제한하려면,
//Q.2 어떤 helper function 을 사용해야 할까요?
// Number.isInteger();

//Q.2 helper function 을 사용하면 어떤 장점이 있을까요?
//쓰는게 간결해진다, 가독성이 좋다.

//Q.2 helper function 을 사용하지 않고 구현할 수 있는 방법이 있을까요?
//add, minus등등에 직접 넣어주면 될거 같습니다.

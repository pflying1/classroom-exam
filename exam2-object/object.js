let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  //위의 basicData를 참고하여 매개변수를 작성하세요.
  count = basicData.count;
  min = basicData.min;
  max = basicData.max;

  let exampleArr = [];
  //매개변수 count는 랜덤함수를 실행하는 횟수를 의미합니다.
  //랜덤함수를 실행하는 횟수만큼 반복문을 실행합니다.
  //랜덤함수가 실행되어 도출된 결과 값을 배열에 추가하고
  //배열을 리턴하는 로직을 작성하세요.
  //실수(float)로 도출된 난수, 소숫점 두자리까지 표현된 값을 배열에 추가합니다.

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.random() * (max - min) + min;
    exampleArr.push(parseFloat(randomNumber.toFixed(2)));
  }
  return exampleArr;
}
console.log(exampleOne());

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  };
  divideNumber = basicData.divideNumber;

  //0번째 매개변수 array는 숫자(실수)로 이루어진 배열입니다.
  //1번째 매개변수는 정수만을 입력하도록 타입을 제어하고,
  //매개변수 divideNumber보다 작은수는 a 배열에, 큰수는 b배열에 추가하는 로직을 작성하세요.
  //divideNumber는 basicData 객체의 divideNumber 속성값을 사용합니다.
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && Number.isInteger(array[i])) {
      if (array[i] < divideNumber) {
        exampleObject.a.push(array[i]);
      } else {
        exampleObject.b.push(array[i]);
      }
    }
  }
  return exampleObject;
}
const array = [3, 6, 9, 12, 15]; //실수 3 //정수 6, 9, 12, 15
console.log(exampleTwo(array));

function exampleThree(array) {
  //매개변수 array의 모든 매개변수를 더하는 로직을 작성하세요.
  let value; // 더한 결과 값을 저장하는 변수입니다.
  value = 0;

  for (let i = 0; i < array.length; i++) {
    value = value + array[i];
  }
  return value;
}
console.log(exampleThree(array));

function exampleFour(object) {
  //매개변수 object의 프로퍼티가 배열인지를 검사한 후,
  if (!Array.isArray(object)) {
    return false;
  }
  //배열의 요소가 모두 숫자형태인지 검사하는 로직을 작성하세요.
  let value; //지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하세요.
  value = object.every((item) => typeof item === "number");
  return value;
}
const object1 = [1, 2, 3]; //오브젝트가 아님 그냥 배열임 그래서 false
const object2 = { test: [1, 2, 3] }; // 오브젝트안의 프로퍼티가 배열이고 숫자라서 true
const object3 = { a: [1], b: [2], c: [3] }; // 오브젝트안의 프로퍼티가 배열이고 숫자라서 true
const object4 = { test: ["1", 2, 3] }; // 오브젝트안의 프로퍼티가 배열이고 문자열이라서 false
console.log(exampleFour(object1.test));
console.log(exampleFour(object2.test));
console.log(exampleFour(object3.c));
console.log(exampleFour(object4.test));

function exampleFive(objectOne, objectTwo) {
  //objectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정합니다.
  //objectTwo는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정합니다.
  let value;

  // objectOne, objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
  // 위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성하세요.
  const sumObjectOne = Object.reduce((count, value) => count + value, 0); //콜백 값만큼 반복
  const sumObjectTwo = Object.reduce((count, value) => count + value, 0); //콜백 값만큼 반복

  //objectOne, objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
  value = sumObjectOne + sumObjectTwo;

  //위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성하세요.
  return value;
}

console.log(exampleFive(basicData, exampleTwo(array)));

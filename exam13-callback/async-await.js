function exampleOne(numberValue) {
  //sequence .1

  function integerCheck(data) {
    return new Promise(function (res, rej) {
      if (Number.isInteger(data) === true) {
        res(data);
      } else {
        return new Error("이 함수는 정수가 필요합니다.");
      }
    });
  }

  // sequence .2
  function innerOne(one) {
    return new Promise(function (res, rej) {
      res(one + 1);
    });
  }
  // sequence .3
  function innerTwo(two) {
    return new Promise(function (res, rej) {
      res(two + 2);
    });
  }
  // sequence .4
  function innerThree(three) {
    return new Promise(function (res, rej) {
      res(three + 3);
    });
  }
  // sequence .5
  function innerFour(four) {
    return new Promise(function (res, rej) {
      res(four + 4);
    });
  }

  // sequence(시쿼스가) 1 -> 2 -> 3 -> 4 -> 5 형태로 실행되어야 합니다
  // 내부함수 inner 시리즈를 순서대로 실행시켜 리턴된 값을 다음 함수에 인자로 넘겨주는 형태가 아래에 작성되어 있습니다.
  // 작동에는 전혀 이상이 없지만, 아무래도 도출되는 것은 하나의 목적일 뿐인데, 변수가 낭비되는 것 같습니다.

  // 난이도 중급 : Q.1 해당 코드를 콜백 지옥으로 처리하면 어떻게 작성될까요? 결과 값은 20입니다.
  // 난이도 고급 : Q.2 해당 코드를 Promise로 처리하면 어떻게 작성될까요?
  // 난이도 고급 : Q.3 해당 코드를 async/await로 처리하면 어떻게 작성될까요?
  // 배운적 없음 : Q.4 부모 함수를 클래스로 만들고, 인스턴스에 '동적'으로 4개의 inner 함수를 매서드로 추가할 수 있을까요?

  // --------호출 부분 -------
  async function asaw() {
    try {
      const data = await integerCheck(numberValue);
      const first = await innerOne(data);
      const second = await innerTwo(first);
      const third = await innerThree(second);
      const forth = await innerFour(third);
      console.log(forth);
    } catch (err) {
      console.log(err);
    }
  }
  asaw();
}

exampleOne(10);

function exampleOne(first, second, dataType) {
  if (typeof first !== dataType && typeof second !== dataType) {
    return new Error(
      `매개변수 first, second는 모두 ${dataType}타입이어야 합니다.`
    );
  }
}

function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {
  //Guide : exampleOne()함수를 호출하여 타입 검사를 따로 합니다.
  //Guide : 타입검사가 실패하면 에러를 발생시켜 함수가 실행 되지 않도록 조치합니다.
  exampleOne(first, second);

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === "boolean") {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴하지 못했습니다.");
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44];

function exampleThree(array, functionOne, functionTwo) {
  //매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 함
  //매개변수 array의 모든 원소는 숫자 정수여야 함
  //매개변수 array의 배열 길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦
  if (typeof functionOne === "function" && typeof functionTwo === "function") {
    array.forEach((array) => {
      // typeof === "number"는 소수점도
      //정수로 취급해서 Number.isInteger를 사용함
      if (Number.isInteger(array)) {
        console.log("정수 맞음");
      } else {
        console.log("정수가 아닙니다.");
      }
    });
  } else {
    console.log("타입이 함수가 아닙니다.");
  }

  if (array.length % 2 === 0) {
    console.log("배열의 길이가 짝수입니다.");
  } else {
    array.push(10);
    console.log("배열의 길이가 짝수가 아니라서 배열의 끝에 10을 추가해줍니다.");
    // console.log(array);
  }

  let arrayResult = [[], [], [], []];
  //매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여
  //비교한 작은 값은 arrayResult의 원소배열의 0번째
  //큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.

  //한쌍이 아닌 한번에
  // const sortAsc = array.sort((a, b) => a - b);
  /* for (let i = 0; i < array.length; i += 2) {
    arrayResult[i / 2] = [sortAsc[i], sortAsc[i + 1]];
  }*/
  for (let i = 0; i < array.length; i += 2) {
    let val1 = array[i];
    let val2 = array[i + 1];
    if (val1 < val2) {
      arrayResult[i / 2] = [val1, val2];
    } else {
      arrayResult[i / 2] = [val2, val1];
    }
  }
  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo));

//정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다.
let basicData = {
  header: {},
  main: {},
  footer: {},
};

// fromJsonData 변수는
// json.parse()를 통해 받아온 데이터라고 가정한다.

let fromJsonData = {
  header: {
    constent: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};
function exampleOne(basicData, fromJsonData) {
  let value = "";
  //아래의 호출부를 참고하여, 지역변수 value에
  //적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.

  return value;
}
console.log(exampleOne(basicData, fromJsonData));
//특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

//위의 fromJsonData와 같은 객체나 JSON을 생성하기 위한
// 생성자 함수, 클래스를 작성한다.
//setter 기능을 활용하여 인스턴스 값들은 모두 "문자열"만 들어가도록
//안정성을 확보한다.

class ExampleTwo {
  constructor(header, main, footer) {
    this._header = new Header(header);
    this._main = new Main(main);
    this._footer = new Footer(footer);
  }
  set header(header) {
    if (typeof header === "string") {
      this._header = new Header(header);
    } else {
      console.error("Header must be a string.");
    }
  }

  set main(main) {
    if (typeof main === "string") {
      this._main = new Main(main);
    } else {
      console.error("Main must be a string.");
    }
  }

  set footer(footer) {
    if (typeof footer === "string") {
      this._footer = new Footer(footer);
    } else {
      console.error("Footer must be a string.");
    }
  }

  get header() {
    return this._header;
  }

  get main() {
    return this._main;
  }

  get footer() {
    return this._footer;
  }
}

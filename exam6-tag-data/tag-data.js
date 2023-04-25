let basicData = {
  header: {
    id: "header",
    type: "div",
    children: null,
  },
  main: {
    id: "main",
    type: "div",
    children: null,
  },
  footer: {
    id: "footer",
    type: "div",
    children: null,
  },
};

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
  //basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고
  //null 데이터타입이 할당되어있으면 매개변수를 각각 할당한다.
  //객체 안의 type값을 불러오기 위해 for in 을 씀
  // children 값이 null 인지 확인
  let value;
  value = Object.keys(object).reduce((acc, key) => {
    if (object[key].children === null) {
      if (object[key].id === "header") {
        acc = acc += `<${object[key].type} id="${object[key].id}"> ${
          array[1] + " " + array[0]
        } </${object[key].type}>\n`;
      } else if (object[key].id === "main") {
        acc += `<${object[key].type} id="${object[key].id}"> ${
          array[2] + " " + array[3]
        } </${object[key].type}>\n`;
      } else {
        acc += `<${object[key].type} id="${object[key].id}"> ${array[4]} </${object[key].type}>\n`;
      }
    } else {
      console.log("error");
    }
    return acc;
    // header, main, footer HTML 태그를 생성하는 로직으로
    //최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오.
  }, "");
  return value;
}

console.log(exampleOne(basicData, elementData));

const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" },
};

//우리 학원 휴게실에 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인 할 수 있게 로직을 구성합니다.
function exampleOne(inputPrice, currency, basicData) {
  //Q1
  //만약 inputPrice가 1000원이라면 currency.thousand.name을 반환하여
  //"일천원권을 넣었습니다."라는 문구를 console.log를 통해 출력하도록 제작하세요.
  if (inputPrice) {
    console.log(currency.thousand.name + "을 넣었습니다.");
  }
  //Q2
  //만약 inputPrice가 1000원일때, basicData를 통해 구매 가능한 제품을
  //console.log()를 통해 출력하세요.

  /*   //for문으로 돌린것
  for (let i = 0; i < basicData.length; i++) {
    if (inputPrice) {
      if (basicData[i].price <= inputPrice) {
        console.log(`${inputPrice}원으로 구매가능한 목록: `, basicData[i].name);
      }
    }
  } */
  //나중에 DB사용할때를 위한 객체 메서드 사용
  const list = basicData.reduce((count, data) => {
    if (data.price <= inputPrice) {
      console.log(`${inputPrice}원으로 구매 가능한 목록: `, data.name);
      return true;
    } else {
      return false;
    }
  }, 0);
  if (list === false) {
    console.log("구매 가능한 목록이 없습니다.");
  }
  //Q3
  //만약 inputData가 모든 제품의 가격보다 적다면 "잔액이 부족합니다."라는 문구를
  //console.log()를 통해 출력하세요.

  //Q4
  //만약 inputData가 모든 제품의 가격보다 많다면 "당신은 부자입니다."라는 문구를
  //console.log()를 통해 출력하세요.

  /*   const minPrice = basicData.reduce((count, data) => {
    return Math.min(count, data.price);
  }, auto);
  const maxPrice = basicData.reduce((count, data) => {
    return Math.max(count, data.price);
  }, 1500); */
  //이렇게 되면 직접 최소 가격 최대 가격 적어줘야함
  //실패 뭔가 잘못됨
  //이러면 if(basicData.price<500)이런식으로 적는거랑 차이가 없음

  //const minPrice = Math.min(basicData.map((data) => data.price));
  //이렇게 썼으나 NAN 이 나오길래 도저히 문제를 모르겠어서 gpt한테 물어봤습니다.
  //...연산자를 안쓰면 묶어져 있는 객체 통으로 하나를 받아옴
  //...연산자를 쓰면 통으로 된 객체를 펼쳐줌

  const minPrice = Math.min(...basicData.map((data) => data.price));
  const maxPrice = Math.max(...basicData.map((data) => data.price));

  if (inputPrice < minPrice) {
    console.log("잔액이 부족합니다.");
  } else if (inputPrice > maxPrice) {
    console.log("당신은 부자입니다.");
  }
}
exampleOne(2000, currency, basicData);

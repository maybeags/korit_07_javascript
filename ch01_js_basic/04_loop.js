// let brands = ["애플", "구글", "메타", '아마존', '삼성전자'];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);

// // 이상과 같은 방식을 굳이 할 필요 없으니까 반복문 써야겠죠
// // Java와 동일합니다.

// for(let i = 0 ; i < brands.length ; i++) {
//   console.log('반복문으로 출력한 ' + brands[i]);
// }

let productList = [
  {
  name: '솔의눈',
  price: 700,
  },
  {
    name: '레쓰비',
    price: 780,
  },
  {
    name: '파워에이드',
    price: 1200,
  },
  {
    name: '오렌지주스',
    price: 1400,
  },
  {
    name: '제로콜라',
    price: 800,
  },
  {
  name: '맥콜',
  price: 900,
  },
];

/*
  이상의 코드 라인에서 주목해야 할 부분은 
  
  첫 번째, 마지막 index에 해당하는 element 다음에도 ','가 찍혀있는데도 불구하고 오류가 발생하지 않는다는 점.

  두 번째, Array의 element인 object의 마지막 property의 value 값 다음에도 ','가 있지만 오류가 발생하지 않는다는 점

  입니다.

  이거 추후에 property를 추가하거나 혹은 element를 추가하거나 할 때 전에 말한 것처럼 쉼표 치고 엔터 치고 다시 {} 혹은 property 추가를하기 귀찮으니까
  맨마지막 element/property 여부와 관계없이 쉼표 찍어주는게 매너가 된게 아예 관행처럼 굳어진겁니다. 그래서 오류로 처리하지도 않습니다. 

*/


console.log(productList[4]);      // 그럼 Array의 element는 object죠.
// 그렇다면 '제로콜라'라는 string 데이터만 뽑아내기 위해서는 어떤 추가작업을 해야할까요?

console.log(productList[4].name);
console.log(productList[4]['name']);


// 솔의 눈과 파워에이드 음료수 합을 구하시오.

console.log(productList[0].name + '의 가격과 ' + productList[2].name  + '의 가격은 각각 ' + productList[0].price + ' 원과 ' + productList[2].price + ' 원으로, 그 합은 ' + (productList[0].price +
productList[2].price) + ' 원 입니다.');

// ; 콜론 안해도 원래 오류 안납니다. 근데 하는게 매너입니다.
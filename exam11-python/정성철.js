const example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];

function flatten(data) {
  const output = [];
  for (let item of data) {
    if (Array.isArray(item)) {
      output.push(flatten(item));
    } else {
      output.push(item);
    }
    return output;
  }
}
console.log(flatten(example));
//파이썬에서 def 는 function
//파이썬에서 for in 은 요소를 순회 즉 자바스크립트에선 for of 와 같다.
//파이썬에서 list는 javascript에서 array와 같다.
//파이썬에서 append는 마지막 list 에 요소추가와 같다.
//파이썬에서 += 은 push와 비슷하다.

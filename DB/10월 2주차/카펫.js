function solution(brown, yellow) {
  //가로 크기는 노란색 격자 개수 + 2 // 세로 크기도 노란색 격자 갯수 + 2
  //stack에 yellow의 약수를 넣어서 가로 세로를 구하자
  let stack = [];
  for (let i = 1; i <= yellow / 2; i++) {
    if (yellow % i == 0) {
      stack.push(i);
    }
  }
  stack.push(yellow);

  let answer = [];
  for (let idx = 0; idx < stack.length; idx++) {
    if (
      (stack[idx] + 2) * (stack[stack.length - 1 - idx] + 2) ==
      brown + yellow
    ) {
      answer.push(stack[stack.length - 1 - idx] + 2);
      answer.push(stack[idx] + 2);
      if (answer.length == 2) {
        break;
      }
    }
  }
  return answer;
}

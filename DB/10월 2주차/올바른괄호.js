function solution(s) {
  // )로 열리거나 (로 닫힐 경우 false
  // (로 열렸다면 )로 닫혀야 함
  // (스택에 추가, () 짝 지어지면 pop하기

  let stack = [];

  for (let str of s) {
    if (str == "(") {
      stack.push(str);
    } else if (str === ")") {
      // 닫힌 괄호일 경우
      if (stack.length === 0) {
        // 스택이 비어있으면 짝이 없으므로 false
        return false;
      }
      // 짝이 맞는 열린 괄호가 있으면 pop(')' 를 추가하고 다시 pop할 필요없음)
      stack.pop();
    }
  }

  return stack.length === 0;
}

function validate(s) {
  let stack = [];
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let str of s) {
    if (str === "(" || str === "[" || str === "{") {
      stack.push(str); // 여는 괄호는 스택에 넣음
    } else if (str === ")" || str === "]" || str === "}") {
      if (stack.length === 0 || stack.pop() !== brackets[str]) {
        return false; // 짝이 안 맞는 닫힌 괄호가 나오면 false
      }
    }
  }

  return stack.length === 0;
  // 스택이 비어 있으면 올바른 문자열
}

function solution(s) {
  let newArr = s.split("");
  let validCount = 0; // 올바른 괄호 문자열 카운트

  for (let i = 0; i < s.length; i++) {
    const rotated = newArr.join("");
    if (validate(rotated)) {
      validCount++;
    }

    let rotate = newArr.shift();
    newArr.push(rotate);
  }

  return validCount;
}

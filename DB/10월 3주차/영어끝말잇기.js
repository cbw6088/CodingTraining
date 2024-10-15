function solution(n, words) {
  let stack = [];
  let player = 0;
  let order = 0;
  for (let i = 0; i < words.length; i++) {
    //이미 말한 단어를 다시 말했을 경우
    if (stack.includes(words[i])) {
      player = (i % n) + 1;
      order = Math.floor(i / n) + 1;
      break;
      //앞사람이 말한 단어의 마지막 문자로 시작하지 않는 단어일 경우
    } else if (i > 0 && words[i - 1].slice(-1) != words[i][0]) {
      player = (i % n) + 1;
      order = Math.floor(i / n) + 1;
      break;
    } else if (words[i].length == 1) {
      player = (i % n) + 1;
      order = Math.floor(i / n) + 1;
      break;
    } else {
      stack.push(words[i]);
      continue;
    }
  }
  if (player == 0 && order == 0) {
    return [0, 0];
  } else {
    return [player, order];
  }
}

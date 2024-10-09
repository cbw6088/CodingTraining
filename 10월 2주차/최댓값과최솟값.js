function solution(s) {
  const nums = s.split(" ");
  maxNum = Math.max(...nums);
  minNum = Math.min(...nums);

  return minNum + " " + maxNum;
}

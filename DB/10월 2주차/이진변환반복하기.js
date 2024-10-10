function solution(s) {
  let removedZero = 0;
  let count = 0;

  while (s != "1") {
    //이진변환 시작할때 count 증가
    count += 1;
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
      //s[i]가 1일 경우 newStr에 1을 추가
      if (s[i] === "1") {
        newStr += "1";
        //s[i]가 0일 경우 removedZero 만 증가
      } else {
        removedZero += 1;
        continue;
      }
    }
    //s의 길이를 2진수로 변환
    s = newStr.length.toString(2);
  }
  return [count, removedZero];
}

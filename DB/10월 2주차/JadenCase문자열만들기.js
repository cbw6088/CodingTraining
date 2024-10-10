function solution(s) {
  //s를 공백으로 일단 분리
  //그 배열에서 길이만큼 돌면서 맨 첫글자만 대문자 처리
  //join

  let splitList = s.split(" ");
  let finalList = [];
  for (let i = 0; i < splitList.length; i++) {
    //빈 문자열만 있을 경우 push 후 그 다음으로 넘어가기
    if (splitList[i] === "") {
      finalList.push("");
      continue;
    }
    let newStr =
      splitList[i][0].toUpperCase() +
      splitList[i].slice(1, splitList[i].length).toLowerCase();
    finalList.push(newStr);
  }

  return finalList.join(" ");
}

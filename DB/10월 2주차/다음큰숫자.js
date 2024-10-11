function solution(n) {
  //nOneCount: n을 이진수로 변환 후 1의 개수 셈

  let nOneCount = n.toString(2).split("1").length - 1;
  //k는 n보다 큰 자연수이므로 n+1부터 시작
  let k = n + 1;
  while (true) {
    let kOneCount = k.toString(2).split("1").length - 1;
    if (nOneCount == kOneCount) {
      break;
    }

    k++;
  }
  return k;
}

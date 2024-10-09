function solution(A, B) {
  //곱한게 최소가 되려면 가장 작은수 x 가장 큰수 여야 함
  //sort 로 정렬

  //배열 A는 오름차순
  A.sort(function (a, b) {
    return a - b;
  });

  //배열 B는 내림차순
  B.sort(function (a, b) {
    return b - a;
  });

  answer = 0;

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

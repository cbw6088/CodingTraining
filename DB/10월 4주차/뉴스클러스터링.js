function solution(str1, str2) {
  // 소문자로 변환하여 두 글자씩 끊는 함수
  const makeMultiset = (str) => {
    const result = [];
    str = str.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
      const part = str[i] + str[i + 1];
      if (/^[a-z]{2}$/.test(part)) {
        result.push(part);
      }
    }
    return result;
  };

  // 각 문자열을 다중집합으로 변환
  const multiset1 = makeMultiset(str1);
  const multiset2 = makeMultiset(str2);

  // 교집합과 합집합 계산
  const intersection = [];
  const union = [...multiset1];

  multiset2.forEach((element) => {
    const index = multiset1.indexOf(element);
    if (index !== -1) {
      // 교집합에 추가하고 multiset1에서 제거
      intersection.push(element);
      multiset1.splice(index, 1);
    } else {
      // 합집합에만 추가
      union.push(element);
    }
  });

  // 자카드 유사도 계산
  const jaccardSimilarity =
    union.length === 0 ? 1 : intersection.length / union.length;

  // 65536을 곱하고 소수점 버리기
  return Math.floor(jaccardSimilarity * 65536);
}

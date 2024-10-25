function solution(s) {
  const sets = [];
  let currentSet = [];
  let num = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "{") {
      currentSet = [];
    } else if (char === "}") {
      // 집합의 끝, 현재 집합을 sets 배열에 추가
      if (num) {
        currentSet.push(parseInt(num));
        num = "";
      }
      sets.push(currentSet);
    } else if (char === ",") {
      // 쉼표가 나오면 현재 숫자를 currentSet에 추가
      if (num) {
        currentSet.push(parseInt(num));
        num = "";
      }
    } else {
      num += char;
    }
  }

  // 집합을 원소의 개수로 오름차순 정렬
  sets.sort((a, b) => a.length - b.length);

  const answer = [];
  const seen = new Set();

  // 각 집합에서 원소를 순서대로 추출
  for (const set of sets) {
    for (const num of set) {
      if (!seen.has(num)) {
        seen.add(num);
        answer.push(num);
      }
    }
  }

  return answer;
}

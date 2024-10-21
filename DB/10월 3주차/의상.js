function solution(clothes) {
  let clothesMap = new Map();

  // 1. 각 의상의 종류별로 개수 세기
  for (let [name, type] of clothes) {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else {
      clothesMap.set(type, 1);
    }
  }

  // 2. 각 종류별 (해당 의상 수 + 1) (해당 종류의 의상을 입지 않는 경우를 포함)
  let combinations = 1;
  for (let count of clothesMap.values()) {
    combinations *= count + 1;
  }

  // 3. 아무 것도 입지 않는 경우를 제외하기 위해 -1
  return combinations - 1;
}

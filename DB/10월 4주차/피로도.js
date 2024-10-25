function solution(k, dungeons) {
  let maxCount = 0;

  function explore(currentEnergy, count, visited) {
    // 최대 던전 개수 업데이트
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {
        const [minRequired, usedEnergy] = dungeons[i];

        // 탐험 가능 여부 체크
        if (currentEnergy >= minRequired) {
          visited[i] = true;
          explore(currentEnergy - usedEnergy, count + 1, visited);
          visited[i] = false;
        }
      }
    }
  }

  // visited 배열 초기화
  const visited = new Array(dungeons.length).fill(false);
  explore(k, 0, visited);

  return maxCount;
}

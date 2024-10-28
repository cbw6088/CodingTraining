function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({
    priority,
    index,
  })); // 우선순위와 원래 인덱스를 함께 저장

  let order = 0; // 몇 번째로 실행되는지 기록

  while (queue.length > 0) {
    let current = queue.shift();

    // 나머지 큐 중에서 더 높은 우선순위가 있는지 확인
    if (queue.some((p) => p.priority > current.priority)) {
      queue.push(current); // 우선순위가 더 높은 프로세스가 있으면 다시 큐의 뒤로 보냄
    } else {
      order++;
      if (current.index === location) {
        return order;
      }
    }
  }
}

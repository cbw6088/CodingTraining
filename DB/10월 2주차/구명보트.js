function solution(people, limit) {
  let boat = 0;
  people.sort((a, b) => a - b); // 오름차순 정렬
  let light = 0;
  let heavy = people.length - 1;

  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      // 가장 가벼운 사람과 가장 무거운 사람을 태움
      light++;
    }
    // 가장 무거운 사람은 보트에 태움
    heavy--;
    // 보트 한 대 추가
    boat++;
  }

  return boat;
}

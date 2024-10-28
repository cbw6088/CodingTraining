function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 네 방향 이동 (상, 하, 좌, 우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS 초기 설정
  const queue = [[0, 0, 1]];
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    // 목표 위치에 도달한 경우
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    // 네 방향으로 이동
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 맵의 범위 안이고, 벽이 아니며, 방문하지 않은 경우 이동
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  // 목표 위치에 도달하지 못한 경우
  return -1;
}

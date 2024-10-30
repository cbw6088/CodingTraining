function solution(maps) {
    var answer = 0;
    var queue = [[0, 0]];
    var initX = [-1, 1, 0, 0];
    var initY = [0, 0, -1, 1];

    while (queue.length) {
        var [x, y] = queue.shift();
        
        for (var i = 0; i < 4; i += 1) {
            var nextX = x + initX[i];
            var nextY = y + initY[i];
            
            if (nextX < 0 || nextY < 0) continue; // 위치가 음수일 경우
            if (nextX >= maps.length || nextY >= maps[0].length) continue; // 위치가 범위를 벗어날 경우
            if (maps[nextX][nextY] === 0 || nextX === 0 && nextY === 0) continue; // 위치가 막혔을 경우
            if (maps[nextX][nextY] === 1) { // 위치가 뚫렸을 경우
                maps[nextX][nextY] = maps[x][y] + 1;
                queue.push([nextX, nextY]);
            }
        }
    }
    
    answer = maps[maps.length - 1][maps[0].length - 1]
    return answer === 1 ? -1 : answer;
}
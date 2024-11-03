function solution(dirs) {
    var current = [0, 0];
    var visitedPos = {};
    
    var moves = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };

    var cnt = 0;

    for(let dir of dirs){
        const [dx, dy] = moves[dir];
        const next = [current[0] + dx, current[1] + dy];
        
        // 경계를 벗어나는 경우 무시
        if(next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) continue;

        // 현재 노드와 다음 노드 정보
        const arr1 = `${current[0]},${current[1]}`;
        const arr2 = `${next[0]},${next[1]}`;

        // 방문하지 않은 경우 초기화
        if(!visitedPos[arr1]) visitedPos[arr1] = {};
        if(!visitedPos[arr2]) visitedPos[arr2] = {};

        // 방문하지 않은 경로라면 기록
        if(!visitedPos[arr1][arr2]){
            visitedPos[arr1][arr2] = true;
            visitedPos[arr2][arr1] = true;
            cnt++;
        }
        // 현재 위치
        current = next;
    }

    return cnt;
}
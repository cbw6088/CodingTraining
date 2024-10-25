function solution(k, dungeons) {
    var answer = -1;
    var maxCnt = 0;
    var visited = Array(dungeons.length).fill(false);
    
    function dfs(k, cnt){
        maxCnt = Math.max(maxCnt, cnt);
        
        for(var i=0; i<dungeons.length; i++){
            const [min, down] = dungeons[i];
            
            if(!visited[i] && k >= min){
                visited[i] = true;
                // 다음 던전
                dfs(k-down, cnt+1);
                // 방문 뒤로
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCnt;
}
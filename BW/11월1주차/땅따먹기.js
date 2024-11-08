function solution(land) {
    var answer = 0;
    
    for (var i = 1; i < land.length; i++) {
        // 현재 행 + 이전 행 중 같은 인덱스를 제외한 최댓값
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
        land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
        land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    }

    // 마지막 행 최대값
    answer = Math.max(...land[land.length - 1]);
    
    return answer;
}
function solution(s) {
    // 배열로 변환하고 개수를 기준으로 오름차순
    const answer = s
        .slice(2, -2)  // 앞뒤의 "{{"와 "}}" 제거
        .split("},{")  // "},{" 기준으로 배열 나눔
        .map(s => s.split(",").map(Number));
    answer.sort((a, b) => a.length - b.length);
    // [ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]
    
    var result = answer[0];
    for(var i=1; i<answer.length; i++){
        for(var j=0; j<answer[i].length; j++){
            if (!result.includes(answer[i][j])) {
                result.push(answer[i][j]); // 기존 값 유지하며 새로운 값만 추가
            }
        }
    }
    
    return result;
}
function solution(citations) {
    var answer = citations;
    answer.sort((a,b)=>b-a); // 내림차순
    
    for(var i = 0;i<answer.length;i++){
        if(i>=answer[i]) return i;
    }

    // 제한에 걸리지 않은 경우 모두 출력
    return answer.length;
}
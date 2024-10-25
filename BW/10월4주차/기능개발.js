function solution(progresses, speeds) {
    var answer = [];
    // 남은 작업 일 수 저장
    for(i=0; i<progresses.length; i++){
        var value = speeds[i]
        var cnt = 1;
        while(100-progresses[i] > value){
            value += speeds[i];
            cnt++;
        }
        answer[i] = cnt;
    }
    // 남은 작업 일 수 비교
    cnt = 1;
    var result = [];
    var idx1 = 0;
    for(i=1; i<answer.length; i++){
        if(answer[idx1] >= answer[i]){
            cnt++;
        }
        else{
            result.push(cnt);
            idx1 = i;
            cnt=1;
        }
    }
    
    result.push(cnt);
    return result;
}
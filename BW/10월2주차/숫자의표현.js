function solution(n) {
    var startNum = 0;
    var cnt = 0;
    
    for(i=1; i<n; i++){
        startNum=i;
        for(j=i+1; j<n; j++){
            // 현재 값 + 다음 값
            startNum+= j;
            if(startNum === n){
                cnt++;
                break;
            } else if(startNum > n){
                break;
            }
        }
    }
    // n값이 추가되므로 +1
    return cnt+1;
}
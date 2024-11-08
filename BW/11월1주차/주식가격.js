function solution(prices) {
    var answer = [];
    
    for(var i=0; i<prices.length; i++){
        var cnt = 0;
        for(var j=i+1; j<prices.length; j++){
            cnt++;
            // 가격이 커진 경우 종료
            if(prices[i] > prices[j]) break;
        }
        answer[i] = cnt;
    }
    return answer;
}
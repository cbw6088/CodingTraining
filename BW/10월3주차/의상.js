function solution(clothes) {
    var answer = [];
    
    // 옷 종류 개수 증가
    for(var i=0; i<clothes.length; i++){
        var type = clothes[i][1];
        if(answer[type]) answer[type]++;
        else answer[type] = 1
    }

    /*
     곱의 연산 이용
     headgear 2개 + 안 입는 경우 1개 = 3개
     eyewear 1개 + 안 입는경우 1개 = 2개
     3 * 2 = 6
     */
    var cnt=1;
    for(var type in answer) {
        cnt *= (answer[type] + 1);
    }
    
    
    return cnt-1; // 아예 안 입는 경우 제외
}
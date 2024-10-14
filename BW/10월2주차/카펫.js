/* 구글링 */
function solution(brown, yellow) {
    var answer = [];
    var total = brown+yellow;
    
    for(y=3; ; y++){
        // 예외처리
        if(total%y != 0) continue;
        var x=total/y;
        if((x-2) * (y-2) === yellow){
            answer[0] = x;
            answer[1] = y;
            break;
        }
    }

    return answer;
}
function conversion(bin, zeroCnt, convCnt) {
    // 종료 조건
    if(bin.join('') === '1') return [convCnt, zeroCnt];
    
    // 0의 개수 카운트
    zeroCnt += bin.filter(char => char === '0').length;
    
    // 0을 제거한 새로운 이진 배열
    var newBin = (bin.filter(char => char !== '0').length).toString(2);
    
    return conversion(newBin.split(''), zeroCnt, convCnt+1);
}

function solution(s) {
    var bin = s.split('');
    var zeroCnt=0;
    var convCnt=0;
    
    var answer = conversion(bin, zeroCnt, convCnt)
    
    var result = [answer[0], answer[1]];

    return result;
}
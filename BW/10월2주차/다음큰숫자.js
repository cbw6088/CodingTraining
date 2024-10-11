function solution(n) {
    var nextNum = n+1;
    var binN = n.toString(2);
    var nCnt = binN.split('').filter(bit=>bit === '1').length; // 2진법 1의 개수
    var answer = 0;
    
    while(1){
        answer = nextNum.toString(2);
        if(answer.split('').filter(bit=>bit === '1').length === nCnt){ // 1의 개수 비교
            break;
        }
        nextNum++;
    }
    
    return nextNum;
}
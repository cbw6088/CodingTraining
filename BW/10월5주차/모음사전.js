function solution(word) {   
    var startArr = [];
    var idx = 0;
    var cnt = 0;
    
    // 모음 저장
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    var arr = [];
    
    // 시작배열과 word가 다르면 반복
    while(startArr.join('') !== word){
        if (startArr.length < 5) {
            startArr.push(vowels[idx % 5]);
        } else{
            idx++;
            for(var i = startArr.length - 1; i >= 0; i--){
                if (startArr[i] === 'U') { // U일 때 pop
                    startArr.pop();
                } else { // 다음 모음 저장
                    startArr[i] = vowels[vowels.indexOf(startArr[i]) + 1];
                    break;
                }
            }
        }
        cnt++;
        
        if (startArr.join('') === word) {
            return cnt;
        }
    }
    
    return cnt;
}

function solution(n, words) {
    var arr = words.slice();
    var stack = [];
    stack.push(arr[0]);
    
    for(i=0; i<words.length-1; i++){
        // 끝말잇기 체크
        if(arr[i][arr[i].length-1] != arr[i+1][0]){
            return [(i+1)%n+1, Math.floor((i+1)/n)+1];
        }
        // 중복 체크
        else{
            stack.push(arr[i+1]);
            // 중복 제거하여 더한 배열과 크기가 같은지 비교
            var uniqueWord = new Set(stack)
            if(uniqueWord.size !== stack.length){
                return [(i+1)%n+1, Math.floor((i+1)/n)+1];
            }       
        }
    }
    
    return [0,0];
}
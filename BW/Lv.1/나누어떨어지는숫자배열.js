function solution(arr, divisor) {
    var answer = [];
    var newArr = arr;
    var idx = 0;
    for(i=0; i<newArr.length; i++){
        if(newArr[i]%divisor === 0){
            answer[idx++] = newArr[i]; 
        }
    }
    if(answer.length === 0) answer[0] = -1;
    answer.sort(function(a,b) {return a-b});
    return answer;
}
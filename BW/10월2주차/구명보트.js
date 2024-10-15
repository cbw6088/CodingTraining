function solution(people, limit) {
    var answer = 0;
    var arr = people;
    var start = 0;
    var end = arr.length-1;
    arr.sort((a, b) => a - b); 
    
    while(start <= end){
        if(arr[start]+arr[end] <= limit) start++;
        end--;
        answer++;
    }
    
    return answer;
}
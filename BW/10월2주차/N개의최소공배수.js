function LCM(num1, num2) {
    var lcm = 1;
    
    while(1){
        if((lcm % num1 === 0) && (lcm % num2 === 0)) break;
        lcm++;
    }
    
    return lcm;
}

function solution(arr) {
    var answer = 0;
    
    // 현재 값과 다음 값의 최소공배수를 구한 후 다음 값에 저장
    for(i=0; i<arr.length-1; i++){
        arr[i+1] = LCM(arr[i], arr[i+1]);
    }
    
    answer = arr[arr.length-1]
    return answer;
}
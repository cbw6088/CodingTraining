function solution(s){
    var answer = true;
    var stack = [];
    for(i=0; i<s.length; i++){
        stack.push(s[i]);
        if(stack.length <= 1) continue; // 첫 반복분은 넘기기
        if(stack[stack.length-1] === ')'){
            stack.pop();
            if(stack[stack.length-1] === '(') stack.pop();
            else return false;
        }
    }
    
    if(stack.length > 0) answer = false;

    return answer;
}
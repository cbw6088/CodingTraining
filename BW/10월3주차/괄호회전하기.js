/* 올바른 괄호 찾기 */
function isValid(s){
    var stack = [];
    for(var i=0; i<s.length; i++){
        var char = s[i];
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }else{
            if(stack.length === 0) return false;
            var top = stack.pop();
            if((char === ')' && top != '(') ||
               (char === ']' && top != '[') ||
               (char === '}' && top != '{')){
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    var arr = s;
    var circle = [];
    var cnt = 0;
    
    /* 회전 */
    for (var i = 0; i < s.length; i++) {
        // 왼쪽으로 i칸만큼 회전 -> (i까지 자른 배열 + 0~i까지 배열)
        var rotated = s.slice(i) + s.slice(0, i);
        
        if (isValid(rotated)) {
            cnt++;
        }
    }
    
    return cnt;
}
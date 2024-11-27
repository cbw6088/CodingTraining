function solution(seoul) {
    var answer = '';
    var idx = 0;
    for(i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            idx = i;
            break;
        }
    }
    return "김서방은 " + String(idx) + "에 있다";
}
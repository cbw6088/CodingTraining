function isPrime(num) {
	if(num <= 1) return false; 
    
 	for(var i = 2; i <= parseInt(Math.sqrt(num)); i++){
  		if(num % i === 0) return false;
	} 
    return true; 
}

function solution(n, k) {
    var answer = 0;
    var stack = n.toString(k).toUpperCase().split("");
    var newStack = "";
    
    while(stack.length > 0){
        var current = stack.shift();
        
        if(current === "0"){ // 0을 만난 경우
            if (newStack !== "" && isPrime(Number(newStack))) {
                answer++;
            }
            newStack = "";
        } else{
            newStack += current;
        }      
    }
    
    // 마지막 값 확인
    if (newStack !== "" && isPrime(Number(newStack))) {
        answer++;
    }

    return answer;
}
function solution(n) {
    var mod = 1234567;
    var fibonacci = [0, 1];
    
    for(i = 2; i <= n; i++){
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % mod;
    }
    
    return fibonacci[n];
}

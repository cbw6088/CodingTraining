"""
N = 1 -> 1칸 
N = 2 -> 2칸 
N = 3 -> 2칸까지 온 경우의 수 1칸 까지 온 경우의 수
N = 4 -> 3칸까지 온 경우의 수 + 2칸까지 온 경우의 수
"""
MAX_VALUE = 2001
MOD = 1234567
def solution(n):
    answer = 0
    dp = [0 for _ in range(MAX_VALUE)]
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, MAX_VALUE):
        dp[i] = (dp[i-1] + dp[i-2]) % MOD
        
    
    answer = dp[n]%MOD
    return answer
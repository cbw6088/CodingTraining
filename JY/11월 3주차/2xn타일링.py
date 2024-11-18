import sys
sys.setrecursionlimit(10**8)

dp = []
MOD = 1000000007
def solution(n):
    answer = 0
    dp = [0] * (n+1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n+1):
        dp[i] = (dp[i-2] + dp[i-1])  %MOD
    answer = dp[n]
    return answer
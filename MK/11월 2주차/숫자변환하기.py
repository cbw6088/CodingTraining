def solution(x, y, n):
    dp=[1e9]*(y+1)
    dp[x]=0
    for i in range(x, y+1):
        val1, val2, val3 = i+n, i*2, i*3
        if val1<=y:
            dp[val1]=min(dp[val1], dp[i]+1)
        if val2<=y:
            dp[val2]=min(dp[val2], dp[i]+1)
        if val3<=y:
            dp[val3]=min(dp[val3], dp[i]+1)


    return dp[y] if dp[y]!=1e9 else -1
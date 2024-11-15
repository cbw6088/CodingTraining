def solution(x, y, n):
    INF = int(1e9)
    dp = [INF] * (y + 1)  # dp 배열 초기화
    dp[x] = 0  # 시작점의 연산 횟수는 0
    
    for i in range(x, y + 1):
        # 현재 위치가 INF라면 갱신된 적이 없는 숫자이므로 건너뜀
        if dp[i] == INF:
            continue
        
        if i + n <= y:
            dp[i + n] = min(dp[i + n], dp[i] + 1)
        if i * 2 <= y:
            dp[i * 2] = min(dp[i * 2], dp[i] + 1)
        if i * 3 <= y:
            dp[i * 3] = min(dp[i * 3], dp[i] + 1)
    
    return dp[y] if dp[y] != INF else -1

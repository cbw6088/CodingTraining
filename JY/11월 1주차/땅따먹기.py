import sys
sys.setrecursionlimit(10**8)
MAX_ROW = 4

def find_max_value(land, column, target):
    max_value = 0
    for row in range(MAX_ROW):
        if row == target:
            continue
        max_value = max(max_value, land[column][row])
    return max_value

def solution(land):
    answer = 0
    dp = [[0] *MAX_ROW for _ in range(len(land))]

    # 테이블 초기화
    for row in range(MAX_ROW):
        dp[0][row] = land[0][row]
    
    # 1번 행부터 갱신 
    for column in range(1, len(land)): # N
        # column-1(이전 행)의 최댓값 and row(열)이 다른 값 + 자기 자신
        for row in range(MAX_ROW): # 4
            dp[column][row] = land[column][row] + find_max_value(dp, column-1, row) #4
            
    answer = max(dp[len(land)-1])
    return answer
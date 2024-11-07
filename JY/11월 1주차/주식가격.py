def solution(prices):
    n = len(prices)
    answer = [0] * n 
    stack = []

    for i in range(n):
        # 현재 주식 가격이 스택에 있는 인덱스의 가격보다 낮다면, 떨어지지 않은 시간을 계산
        while stack and prices[stack[-1]] > prices[i]:
            day = stack.pop()
            answer[day] = i - day  # 떨어지지 않은 시간을 계산해서 저장
        stack.append(i)  # 현재 인덱스를 스택에 추가

    while stack:
        day = stack.pop()
        answer[day] = n - day - 1  # 남은 인덱스에 대해 끝까지 떨어지지 않은 시간 계산

    return answer

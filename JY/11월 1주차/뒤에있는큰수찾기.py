import sys
sys.setrecursionlimit(10**8)
def solution(numbers):
    answer = [-1] * len(numbers)
    stack = []
    
    # 뒤에서부터 탐색
    for i in range(len(numbers) - 1, -1, -1):
        # 스택의 맨 위 값이 현재 값보다 작거나 같으면 pop
        while stack and stack[-1] <= numbers[i]:
            stack.pop()
        # 스택이 비어 있지 않으면 현재 값의 뒷 큰수는 스택의 맨 위 값
        if stack:
            answer[i] = stack[-1]
        # 현재 값을 스택에 추가
        stack.append(numbers[i])
    
    return answer

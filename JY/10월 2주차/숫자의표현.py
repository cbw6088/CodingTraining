from collections import deque 
def solution(n):
    answer = 1
    dq = deque()
    target = n
    
    #-- STEP1. 순회
    for i in range(1, n):
        dq.append(i)
        #-- STEP2. 현재 합이 더 작다면 푸쉬
        if sum(dq) < target:
            continue
        
        #-- STEP3. 더 크거나 같은 경우는 제거        
        while sum(dq) > target:
            dq.popleft()
            
        if(sum(dq) == target):
            answer +=1
            dq.popleft()

    return answer
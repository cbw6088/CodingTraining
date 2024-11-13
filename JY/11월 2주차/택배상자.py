from collections import deque
def solution(order):
    answer = 0
    dq = deque()
    
    # STEP0. 1번부터~ N번까지 삽입
    for i in range(1, len(order)+1):
        dq.append(i)
        
    while len(dq) > 0:
        front = dq[0]
        back = dq[-1]
        
        if order[answer] == front:
            dq.popleft()
            answer +=1
        elif order[answer] == back:
            dq.pop()
            answer +=1
        elif order[answer] > front:
            dq.append(dq.popleft()) #-- 뒤에 삽입
        else:
            break
    # 마지막 처리
    
    return answer
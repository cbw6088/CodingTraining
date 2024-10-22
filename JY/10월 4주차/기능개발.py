import math
from collections import deque
def solution(progresses, speeds):
    answer = []
    due_date_list = deque()
    
    for idx, progess in enumerate(progresses):
        due_date_list.append(math.ceil((100-progess)/speeds[idx]))
    
    while due_date_list:
        date = due_date_list.popleft()
        cnt = 1
        while len(due_date_list) != 0 and date >= due_date_list[0] :
            due_date_list.popleft()
            cnt+=1
        answer.append(cnt)
        
    return answer


# 미리 계산한다면 speeds
# remain_date = [7, 70, 45] 
# due_date_list = [7, 3, 9] => ceil.3
# while due_date_lsit:
# curr = due_date_lsit.pop()
# while curr >= due_date_lsit[-1]:
#     pop()
#     cnt+=1

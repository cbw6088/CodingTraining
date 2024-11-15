import sys
from collections import deque
sys.setrecursionlimit(10**8)

def solution(record):
    answer = []
    
    # STEP0. 딕셔너리 생성 + 튜플 형태(str, key)
    dic = {}  # [IN, KEY]
    working_queue = deque()  # deque 인스턴스 생성
    
    # STEP1. E 또는 C면 사전 변경
    for data in record:
        if data[0] == 'E' or data[0] == 'C':
            _, id, nick_name = data.split(" ")
            dic[id] = nick_name
            if data[0] == 'E':
                working_queue.append(['IN', id])  
        else:
            _, id = data.split(" ")  # OUT일 때 id만 분리
            working_queue.append(['OUT', id])  # working_queue.append 사용
            
    while working_queue:
        
        info, id = working_queue.popleft()
        if info == "IN":
            answer.append(f"{dic[id]}님이 들어왔습니다.")
        else:
            answer.append(f"{dic[id]}님이 나갔습니다.")
    
    return answer

import sys
from collections import Counter
sys.setrecursionlimit(10**8)

o_dict = {}
y_dict = {}

def solution(topping):
    answer = 0
    o_dict = Counter(topping)
    
    for t in topping:
        y_dict[t] = y_dict.get(t, 0) + 1
        o_dict[t] = o_dict.get(t, 0) -1
        
        # 토핑 없으면 삭제
        if o_dict[t] <= 0:
            del o_dict[t]
        
        #-- 동생 토핑이 많아지면 평등 불가    
        if len(y_dict.keys()) > len(o_dict.keys()):
            break
        #-- 토핑 종류 똑같으면 정답 추가
        if len(y_dict.keys()) == len(o_dict.keys()):
            answer +=1
        
    return answer
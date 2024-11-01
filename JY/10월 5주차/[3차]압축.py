import sys
from collections import Counter
sys.setrecursionlimit(10**8)
answer = []
alpha_dict = {}
alpha_idx = 27

"""
KAKAO
"""
def get_zip(word, msg, idx):
    global alpha_idx
    global alpha_dict
    global answer
    
    #-- 범위를 넘어가면 마지막임
    if idx >= len(msg):
        answer.append(alpha_dict[word])
        return idx
    
    #-- 뒤에 문자열을 추가해서 새로운 문자열을 만들고
    new_word = word + msg[idx]
    
    #-- 사전에 있다면 재귀적으로 다시 탐색
    if new_word in alpha_dict:
        return get_zip(new_word, msg, idx+1)
    
    
    #-- 사전에 없다면 등록 후 정답에 추가
    else:
        alpha_dict[new_word] = alpha_idx
        alpha_idx+=1
        answer.append(alpha_dict[word])
        return idx
    
def solution(msg):
    global alpha_dict
    global answer
    # 대문자 변환
    msg = msg.upper()

    # 사전에 등록
    a = "A"
    for i in range(26):
        alpha_dict[chr(ord(a) +i)] = i+1
      
    # 문자열 압축
    idx = 0
    while idx < len(msg):
        idx = get_zip("", msg, idx)    
    
        
    return answer
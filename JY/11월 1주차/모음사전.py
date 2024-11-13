import sys

sys.setrecursionlimit(10**8)
dictionary = ['A', 'E', 'I', 'O', 'U']
ANSWER = 0
COUNT = 0
MAX_LENGTH = len(dictionary)

def find_word_in_dictionary(target, curr):
    global COUNT
    
    #-- 타겟을 찾으면 정답에 추가
    if target == curr:
        ANSWER = COUNT
        return

    #-- 5개 이상은 중지
    if len(curr) == MAX_LENGTH:
        return
    
    #-- 재귀적으로 탐색
    for word in dictionary:
        new_word = curr + word
        COUNT+=1
        find_word_in_dictionary(target, new_word)
        
def solution(word):
    find_word_in_dictionary(word, "")
    return ANSWER
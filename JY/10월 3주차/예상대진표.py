import math
def solution(n,a,b):
    answer = 0
    if b < a :
        temp  = b
        b = a
        a = temp
    
    while a != b :
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        answer +=1

    return answer
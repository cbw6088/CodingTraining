def solution(clothes):
    answer = 1
    
    dic = {}
    
    for value, key in clothes:
        if key not in dic:
            dic[key] = 2
        else:
            dic[key] +=1
    
    
    for item in dic:
        answer *= dic[item]
    answer -=1
    return answer
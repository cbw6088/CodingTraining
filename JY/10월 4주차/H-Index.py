MAX_COUNT = 10001
def solution(citations):
    answer = 0
    #STEP1. h=1부터 10000 
    for h in range(1, MAX_COUNT):
        #STEP2. N만큼의 논문 순회(1000)
        cnt = 0
        for i in range(len(citations)):
            if citations[i] >= h:
                cnt+=1
        if cnt >= h :
            answer = h
        #-- 안되는 순간 나머지는 다 안됨
        else:
            break
    #STEP3. 
    return answer
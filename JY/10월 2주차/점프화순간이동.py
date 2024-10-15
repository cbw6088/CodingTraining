def solution(n):
    ans = 0
    
    #-- STEP1. 나머지가 0이 될 때 까지 나눠버림
    while n>0 :
        if n%2 ==0 :
            n = n//2
        else:
            #-- STEP2. 나머지 0이 안되면 1개 뺌
            ans+=1
            n=n-1
    
    return ans
def solution(A,B):
    answer = 0
    
    #최대, 최소로 정렬
    A.sort()
    B.sort(reverse= True)
    
    for i in range(len(A)):
        answer = answer + (A[i] * B[i])
    return answer
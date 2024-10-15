MAX_SIZE = 1000000

def get_lenght_one(target):
    cnt = 0
    binary = format(target, 'b')
    for i in range(len(binary)):
        if binary[i] == '1':
            cnt+=1
    return cnt
        
def solution(n):
    """
    조건 1. n의 다음 큰 숫자는 n보다 큰 자연수
    조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같음
    조건 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수
    """
    answer = 0
    
    #-- STEP1. n을 진수로 변환 후 1의 개수 확인 
    target = get_lenght_one(n)
    for i in range(n+1, MAX_SIZE+1):
        if target == get_lenght_one(i):
            answer = i
            break
        
    return answer
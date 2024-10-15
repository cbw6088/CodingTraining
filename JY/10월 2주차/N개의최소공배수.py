def gcd(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r
    return a

def lcm(a, b):
    return a * (b / gcd(a, b))

def solution(arr):
    answer = 0
    
    a = arr[0]
    answer = a
    for i in range(1, len(arr)):
        answer = lcm(answer, arr[i])
        
    return answer
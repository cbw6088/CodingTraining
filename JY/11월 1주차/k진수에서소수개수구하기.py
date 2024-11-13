import sys
sys.setrecursionlimit(10**8)

def to_base(n, k):
    base = ""
    while n:
        base += str(n % k)
        n //= k
    return base[::-1]

def is_prime(n):
    if n < 2:
        return False
    for i in range(2,n):
        if n % i == 0:
            return False
    return True

def find_prime(converted_number):
    count = 0
    for part in converted_number.split('0'):
        if part and is_prime(int(part)):
            count += 1
    return count

def solution(n, k):
    converted_number = to_base(n, k)
    return find_prime(converted_number)

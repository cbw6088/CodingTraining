def to_base(number, base):
    digits = "0123456789ABCDEF"  
    if number == 0:
        return "0"
    ret = ""
    while number:
        ret += digits[number % base]
        number //= base
    return ret[::-1]

def solution(n, t, m, p):
    answer = ''
    number = -1
    turn = -1

    while len(answer) < t:
        number += 1
        convert_to_base = to_base(number, n)
        for char in convert_to_base:
            turn += 1
            if turn % m == (p - 1):
                answer += char
                if len(answer) == t:
                    break
    return answer
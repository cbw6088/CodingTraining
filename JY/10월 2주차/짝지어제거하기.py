def solution(s):
    answer = 0
    
    stack = []
    
    for i in range(len(s)):
        if len(stack) == 0:
            stack.append(s[i])
            continue
        
        peek = stack[-1]
        if peek == s[i]:
            stack.pop()
        else:
            stack.append(s[i])
    if len(stack) == 0:
        answer= 1

    return answer
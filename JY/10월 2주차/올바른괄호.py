def solution(s):
    stack = []
    answer = True
    
    for i in range(len(s)):
        if s[i] == "(":
            stack.append(s[i])
        elif s[i] == ")":
            try:
                stack.pop()
            except:
                answer = False
                break
    if len(stack) != 0:
        answer = False
    
    
    return answer
mapper = {
        "]" : "[",
        ")" : "(",
        "}" : "{"
    }

def is_correct_Bracket(target):
    stack = []
    flag = True
    for j in range(len(target)):
        char = target[j]
        # if : 열린 괄호는 전부 넣고 다음으로
        if char == '[' or char == '{' or char == '(':
            stack.append(char)
            continue

        # if : 닫힌 괄호는 매퍼를 확인해서 맞는지 확인
        if len(stack) == 0 or mapper[char] != stack[-1]:
            flag = False
            break
        stack.pop()
    if len(stack) == 0 and flag:
        return True
    return False
    
def solution(s):
    answer = 0
    
    sz = len(s)
    # 길이만큼 합치기
    s = s+s[:sz-1]

    # 기존 길이만큼 회전을 하면서
    for i in range(sz):
        target = s[i:i+(sz)]
        if is_correct_Bracket(target):
            answer +=1

    return answer


def remove_zero(s):
    str = ""
    cnt = 0
    for i in range(len(s)):
        if s[i] == '1':
            str += s[i]
        else:
            cnt+=1
    return cnt, len(str)

def convert_to_base(number):
    return format(number, 'b')
def solution(s):
    answer = [0, 0]
    turn = 0
    
    while True:
        # STEP1. target check
        if s == '1':
            break
        
        # STEP2. Remove Zero -> cnt, length
        cnt, length = remove_zero(s)
        
        # STEP3. Convert to Base(2)
        s = convert_to_base(int(length))
            
    
        turn+=1
        answer[0] = turn
        answer[1] += cnt
        
        
        
    return answer
import sys
sys.setrecursionlimit(10**8)

def find_number(target, index):
    numbers = "0123456789"
    cnt = 0
    for i in range(index, len(target)):
        if target[i] not in numbers:
            break
        else:
            cnt +=1
    return index+cnt
            
def find_string(target, index):
    numbers = "0123456789"
    cnt = 0
    for i in range(index, len(target)):
        if target[i] in numbers:
            break
        else:
            cnt +=1
    return index+cnt
    
def solution(files):
    answer = []
    file_list = []
    
    # STEP0. Head, Number, Tail로 분리
    for file in files:
        
        head_index = find_string(file, 0)
        head = file[:head_index]
        
        number_index = find_number(file, head_index)
        number = file[head_index:number_index]
        
        
        tail = file[number_index:]
        # print(f"head is {head} number is {number} tail is {tail}") 
        file_list.append([head, number, tail])
    
    # STEP1. 사전순 -> 숫자 정렬
    file_list.sort(key= lambda x : (x[0].upper(), int(x[1])))
    for file in file_list:
        head, number, tail = file
        answer.append(f"{head}{number}{tail}")
        # print(f"{head}{number}{tail}")

    return answer
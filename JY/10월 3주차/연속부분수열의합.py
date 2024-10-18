from collections import Counter

def solution(elements):
    answer = 0
    number_dict = Counter()
    sz = len(elements)
    elements += elements[:sz-1]
    
    # 1~N까지 반복문
    for i in range(0, sz):
        # 1개부터 n까지 합 슬라이딩 합 구합기
        for j in range(sz):
            number_dict[sum(elements[j%sz:j+(i+1)])] +=1
    answer = len(number_dict)
    return answer
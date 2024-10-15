"""
경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화
[1, 3, 2, 5, 4, 5, 2, 3]
1,4를 제외하면 총 3가지

1 : 1 
2 : 2
3 : 2
4 : 1
5 : 2

딕셔너리 사용해서 개수를 파악하고 정렬 후에 가장 큰 값부터 제거?
아니면 클래스 선언해서 내맘대로 정렬 후 에 맨 앞부터 제거하면서 간다

1 3 2 5 4 5 2 3 

"""
def solution(k, tangerine):
    answer = 0
    table = [0 for _ in range(10000001)]

    # STEP1. 입력값 받은 뒤 오름차순 정렬
    for data in tangerine:
        table[data] +=1
    
    table.sort(reverse = True)
    
    # STEP2. 가장 많은 값부터 시작해서 정답을 1개 증가
    for tangerine in table:
        answer +=1
        # 귤 상제에서 꺼낼 수 있는 만큼 꺼내옴
        k = max(k-tangerine, 0)
        
        # 목표치를 할당했으면 종료
        if k == 0:
            break
        
    return answer

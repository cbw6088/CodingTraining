def solution(people, limit):
    answer = 0
    #STEP1. start < end 반복
    start = 0
    end = len(people)-1
    people.sort(reverse=True)
    
    #STEP2. 정렬된 리스트에서 시작과 끝을 비교ㅕ
    #만약 S와 E를 함께 태울 수 있다면 둘 다 한칸씩 전지    
    #만약 S와 E 중 한 명만 태울 수 있다면 제일 무거운 사람 태우고 지나감
    #만약 S와 E를 함께 태울 수 있다면 둘 다 한칸씩 전지
    while start <= end:
    
        if people[start] + people[end] > limit:
            start +=1
        else:
            start+=1
            end-=1
        answer +=1

    return answer
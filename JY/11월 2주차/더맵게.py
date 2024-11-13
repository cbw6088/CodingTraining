import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)  # 리스트를 최소 힙으로 변환

    while True:
        # 가장 낮은 스코빌 지수가 K 이상인지 확인
        if scoville[0] >= K:
            break

        # 스코빌 지수가 K 이상으로 만들 수 없는 경우
        if len(scoville) < 2:
            return -1

        # 가장 낮은 두 개의 요소를 꺼내어 새로운 스코빌 지수를 계산
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        new_scoville = first + (second * 2)
        heapq.heappush(scoville, new_scoville)
        
        answer += 1

    return answer

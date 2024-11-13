import heapq

def solution(scoville, K):
    res=0
    heapq.heapify(scoville)

    while scoville[0] < K and len(scoville)>=2:
        res+=1
        v1, v2 = heapq.heappop(scoville), heapq.heappop(scoville)
        heapq.heappush(scoville, v1 + v2*2)

    return res if scoville[0]>=K else -1
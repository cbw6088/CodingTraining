import heapq

def solution(nums):

    res=[-1]*len(nums)

    pq=[]

    for i in range(len(nums)):
        while pq and pq[0][0] < nums[i]:
            cur, idx = heapq.heappop(pq)
            res[idx]=nums[i]

        heapq.heappush(pq, [nums[i], i])

    return res
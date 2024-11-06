def solution(prices):
    n=len(prices)
    stack = []
    res=[i for i in range(n-1,-1,-1)]
    for i in range(n):
        while stack and prices[stack[-1]] > prices[i]:
            idx=stack.pop()
            res[idx] = i-idx
        stack.append(i)

    return res
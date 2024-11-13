def solution(order):
    tmp = [] # 보조 컨테이너
    n = len(order)
    idx = 0

    for num in range(1, n+1): # 그냥 컨테이너
        tmp.append(num)

        while tmp and tmp[-1] == order[idx]:
            tmp.pop()
            idx += 1
    return idx
def solution(dirs):
    res=0
    dic = {"L":[0,-1], "R": [0, 1], "D": [-1,0], "U":[1,0]}
    cache=[]
    cur=[0, 0]
    for d in dirs:
        x, y = cur[0], cur[1]
        nx,ny = cur[0] + dic[d][0], cur[1] + dic[d][1]
        if not (-5<=nx<=5) or not (-5<=ny<=5):
            continue
        if [(x,y), (nx,ny)] not in cache:
            cache.append([(x,y), (nx,ny)])
            cache.append([(nx,ny), (x,y)])
            res += 1
        cur[0], cur[1] = nx, ny

    return res


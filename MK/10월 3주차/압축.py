def solution(msg):
    dic = dict(zip("abcdefghijklmnopqrstuvwxyz".upper(), [i for i in range(1, 27)]))

    res=[]

    cur, n = msg[0], 27

    for c in msg[1:]:
        tmp = cur + c

        if tmp not in dic:
            res.append(dic[cur]) # 출력
            dic[tmp]=n # 추가
            n+=1
            cur=c
        else:
            cur=tmp

    res.append(dic[cur])

    return res

from collections import Counter

def solution(record):

    dic=Counter()

    for r in record:
        r=r.split()
        if len(r) > 2:
            dic[r[1]]=r[2]

    res=[]

    for r in record:
        r=r.split()
        if r[0]=="Enter":
            res.append(dic[r[1]]+"님이 들어왔습니다.")
        elif r[0]=="Leave":
            res.append(dic[r[1]]+"님이 나갔습니다.")

    return res
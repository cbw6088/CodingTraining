def solution(skill, tree):

    candidate=[skill[:i] for i in range(1,len(skill)+1)]
    c, cb , cbd
    res=0

    for t in tree:
        s = "".join(i for i in t if i in skill)
        if not s:
            res+=1
        else:
            if s in candidate:
                res+=1

    return res









def solution(skill, skill_trees):
    res=0

    dic=dict(zip(list(skill), [i for i in range(len(skill))]))

    for t in skill_trees:
        arr=[dic[i] for i in t if i in dic]

        if not arr:
            res+=1
            continue

        if 0 not in arr:
            continue

        flag=True

        for i in range(len(arr)-1):
            if arr[i+1]-arr[i] != 1:
                flag=False
                break
        if flag:
            res+=1

    return res
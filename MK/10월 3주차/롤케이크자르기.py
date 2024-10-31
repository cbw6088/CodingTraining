from collections import Counter
def solution(topping):
    res=0
    dic = Counter(topping)
    p = set()
    for i in range(len(topping)):
        dic[topping[i]] -= 1
        if not dic[topping[i]]:
            del dic[topping[i]]
        p.add(topping[i])
        if len(dic) == len(p):
            res+=1
    return res
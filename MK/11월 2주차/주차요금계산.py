from collections import defaultdict
from collections import Counter
import math

def solution(fees, records):
    res=[]
    times=defaultdict(list)
    car=Counter()
    for r in records:
        r=r.split()
        times[r[1]].append(r[0])

    for k, v in times.items():
        val=0
        if len(v) %2==1:
            v.append("23:59")
        for i in range(0,len(v),2):
            val+=(trans(v[i+1]) - trans(v[i]))
        money=fees[1]
        val=val - fees[0] if val >= fees[0] else 0
        val=fees[1] + math.ceil(val/fees[2]) * fees[3]
        car[k]=val

    return [car[i] for i in sorted(car.keys())]

def trans(time):
    t = time.split(":")
    return int(t[0])*60 + int(t[1])

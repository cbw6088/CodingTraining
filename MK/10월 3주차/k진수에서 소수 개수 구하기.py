def solution(n, k):
    def trans(n,k):
        val=""
        while n:
            n, a = n // k, n%k
            val = str(a) + val
        return val

    nums = list(map(int ,list(num for num in trans(n,k).split("0") if num!="")))

    res=len(nums)

    for num in nums:
        if num in [0,1]:
            res-=1
            continue
        for i in range(2, int(num**0.5)+1):
            if num % i ==0:
                res-=1
                break

    return res
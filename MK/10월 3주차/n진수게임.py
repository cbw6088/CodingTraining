def solution(n, t, m, p):

    nums = [i for i in range(t * 100)]

    dic = dict(zip([i for i in range(10, 16)], ["A", "B", "C", "D", "E", "F"]))

    def trans(num, n):
        if num == 0:
            return "0"

        val = ""

        while num:
            val += dic[num % n] if num % n >= 10 else str(num % n)
            num //= n

        return val[::-1]

    string = ""
    ans, p = "", p - 1

    for num in nums:
        string += trans(num, n)
        if len(string) > p:
            ans += string[p]
            p += m
        if len(ans) == t:
            break

    return ans
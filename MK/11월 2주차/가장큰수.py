def solution(numbers):
    if sum(numbers) == 0:
        return "0"
    numbers.sort(reverse=True, key=lambda x: str(x)*(9 // len(str(x))))
    return "".join(list(map(str,numbers)))
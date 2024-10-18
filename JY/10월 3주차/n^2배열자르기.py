def solution(n, left, right):
    answer = []
    if left == right:
        return [max((left%n) , right//n)]
    
    for i in range(left, right+1):
        y_max =  (i%n) + 1
        x_max = (i//n) + 1
        # print(f"Y : {y_max}, X : {x_max}")
        answer.append(max(y_max, x_max))
    
    return answer
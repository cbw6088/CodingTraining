"""
[1 ,4]  [3, 3]
[3 ,2]  [3, 3]
[4 ,1]

3 x 2 
2 x 2  

= 3 x 2
for i -> A의 열
for j -> B의 열 또는 A의 행
sum = A[i, k] * B[k, j]
C[i][j] = sum
"""
def solution(arr1, arr2):
    # 3 X 5 * 5 X 2 = 3 X 2  
    # Y = A의 Y
    # X = B의 X 
    
    Y = len(arr1)
    X = len(arr2[0])
    add_count = len(arr1[0])
    # add_count = len(arr2)
    answer = [[0] * X  for _ in range(Y)] 
 
    for i in range(Y):
        for j in range(X):
            sum_value = 0
            for k in range(add_count):
                sum_value = sum_value +  (arr1[i][k] * arr2[k][j])
            answer[i][j] = sum_value
                
    return answer
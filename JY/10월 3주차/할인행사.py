from copy import deepcopy
def solution(want, number, discount):
    answer = 0
    
    #- shopping_list에 옮겨 담기
    shopping_list = dict()
    for i in range(len(want)):
        shopping_list[want[i]] = number[i]

    #목록을 돌면서 10일치만 확인
    
    # 0~9(10일동안 )
    
    for day in range(len(discount)-9):
        #STEP1. 10일치 목록이랑 쇼핑 리스트랑 확인
        temp_shopping_list = deepcopy(shopping_list)
        discount_list = discount[day:day+10]
        
        discount_dict = dict()
        for i in range(len(discount_list)):
            if discount_list[i] not in discount_dict:
                discount_dict[discount_list[i]] = 1
            else:
                discount_dict[discount_list[i]] +=1
        
        if discount_dict == shopping_list:
            answer +=1
        
    return answer
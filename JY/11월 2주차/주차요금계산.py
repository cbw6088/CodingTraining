import sys
import datetime
from collections import Counter
import math 

sys.setrecursionlimit(10**8)
IN_TIME = 0
TOTAL_TIME = 1
INFO = 2

def time_to_minuate(time):
    hours, minutes = map(int, time.split(":"))
    total_minutes = (hours * 60) + minutes
    return total_minutes
    
def solution(fees, records):
    answer = []
    car_numbers = {}
    # 0. 차량 번호 등록
    for record in records:
        time, car_number, info = record.split(" ")
        car_numbers[car_number] = [0, 0, "None"]
    
    for record in records:
        time, car_number, info = record.split(" ")
        total_minutes = time_to_minuate(time)
        
        # 1. 입차 등록
        if info == "IN":
            remain_time = car_numbers.get(car_number, 0)[TOTAL_TIME]
            car_numbers[car_number] = [total_minutes, remain_time, "IN"]
            continue
        # 2. 출차 등록
        if info == "OUT":
            in_time = car_numbers.get(car_number)[IN_TIME] 
            total_time = car_numbers.get(car_number)[TOTAL_TIME]
            car_numbers[car_number] = [0, total_time + (total_minutes- in_time), "OUT"]
    
    # 출차된 내역이 없다면 23:59에 출차로 처리
    for car_number in car_numbers:
        info = car_numbers.get(car_number)[INFO]
        in_time = car_numbers.get(car_number)[IN_TIME]
        if info == 'IN':
            total_minutes = time_to_minuate("23:59")
            remain_time = car_numbers.get(car_number)[TOTAL_TIME]
            car_numbers[car_number] = [0, remain_time + (total_minutes- in_time), 'OUT']
    
    sorted_car_numbers = dict(sorted(car_numbers.items()))
    for car_number in sorted_car_numbers:
        parking_info = car_numbers.get(car_number)
        print(parking_info)
        parking_time = parking_info[TOTAL_TIME] - fees[0]
        if parking_time <= 0 :# 기본 시간보다 작다면
            answer.append(fees[1]) #기본 요금만
            continue
        
        print(fees[1] + math.ceil(parking_time/fees[2]) * fees[3])
        answer.append(fees[1] + math.ceil(parking_time/fees[2]) * fees[3])
        
        
    return answer
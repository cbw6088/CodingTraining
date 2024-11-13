mapping = {  # x, y
    "L": (-1, 0),
    "R": (1, 0),
    "U": (0, 1),
    "D": (0, -1)
}

def is_possible(nx, ny):
    return -5 <= nx <= 5 and -5 <= ny <= 5

def solution(dirs):
    x, y = 0, 0  # 시작 위치
    visited_paths = set()  # 지나간 경로를 저장하는 집합

    for dir in dirs:
        dx, dy = mapping[dir]
        nx, ny = x + dx, y + dy

        if is_possible(nx, ny):
            # 경로 저장: (현재 위치, 다음 위치)와 (다음 위치, 현재 위치) 모두 저장
            path = ((x, y), (nx, ny))
            reverse_path = ((nx, ny), (x, y))
            visited_paths.add(path)
            visited_paths.add(reverse_path)
            x, y = nx, ny  # 위치 갱신

    return len(visited_paths) // 2  # 총 경로의 길이 반환

def solution(m, n, board):
    # 문자열 배열을 2D 리스트로 변환
    board = [list(row) for row in board]
    total_removed = 0

    while True:
        # STEP 1: 블록 탐지 및 제거
        to_remove = set()
        for r in range(m - 1):
            for c in range(n - 1):
                # 2×2 블록이 모두 동일한지 검사
                if board[r][c] != ' ' and \
                   board[r][c] == board[r][c + 1] == board[r + 1][c] == board[r + 1][c + 1]:
                    to_remove.update([(r, c), (r, c + 1), (r + 1, c), (r + 1, c + 1)])

        # 지울 블록이 없다면 종료
        if not to_remove:
            break

        # STEP 2: 블록 제거
        for r, c in to_remove:
            board[r][c] = ' '
        total_removed += len(to_remove)

        # STEP 3: 블록 낙하 처리
        for c in range(n):
            stack = []
            for r in range(m):
                if board[r][c] != ' ':  # 빈 공간이 아닌 블록을 스택에 추가
                    stack.append(board[r][c])
            # 스택의 블록을 아래에서부터 채우고 나머지를 빈 공간으로 처리
            for r in range(m - len(stack)):
                board[r][c] = ' '
            for r in range(m - len(stack), m):
                board[r][c] = stack[r - (m - len(stack))]

    return total_removed

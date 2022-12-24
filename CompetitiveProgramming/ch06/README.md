# 동적계획법(Dynamic Programming)

DP를 사용하기 위해서는 문제의 재귀적인 부분을 알아야 하는데, 그러면 작은 문제의 답을 이용하여 원래의 답을 계산할 수 있다.
동전 문제를 해결하기 위해서 다음과 같은 재귀함수로 바꿀 수 있다.
합 x를 만들기 위한 함수 solve(x)를 구하는 것
예를 들어 coins = {1, 3, 4}이면 이 함수의 값은 다음과 같이 될 것이다.

| function | result |
| -------- | ------ |
| solve(0) | 0      |
| solve(1) | 1      |
| solve(2) | 2      |
| solve(3) | 1      |
| solve(4) | 1      |
| solve(5) | 2      |
| solve(6) | 2      |

solve 함수의 성질을 통해 다음과 같은 점화식을 세울 수 있다.

```
solve(x) = min(
    solve(x-1)+1,
    solve(x-3)+1,
    solve(x-4)+1
)
```
이 재귀 함수의 기저 조건(base case)는 solve(0) = 0이다. 

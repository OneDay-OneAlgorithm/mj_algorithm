# 에라토스테네스의 체
## 구현코드
```js
function eratos(size) {
    const array = new Array(size).fill(true);
    for(let i = 2; i * i <= size; i++){
        if(array) 
            for(let j = i * i; j <= size; j += i) 
                array[j] = false;
        array.splice(0,2,false,false);
    }
    return array;
}

const array = eratos(100);
```
## 설명
N이라는 값이 소수인지 판별하기 위해서 제곱근 N보다 작은 값에서 나눠지지 않으면 제곱근 N보다 큰 값에서도 나눠질 수 없기 때문에 제곱근까지만 반복한다. 
에라토스테네스의 체는 구하려는 배열의 사이즈 N 내에 존재하는 값들이 소수인지 판별하기 위해서 사용한다. N의 제곱근까지 2부터 N제곱근까지의 배수들을 모두 제외하여 제외되지 않은 수들은 모두 소수임을 이용하는 방법이다.  
/*
문자열 두 개가 주어졌을 때, 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성해라.
*/

function getPermutations(str, prefix = '') {
    if (str.length <= 1) {
        return [prefix + str];
    }

    let permutations = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingStr = str.slice(0, i) + str.slice(i + 1);
        permutations = permutations.concat(getPermutations(remainingStr, prefix + char));
    }
    return permutations;
}

function solution(str1, str2) {
    // 짧은 문자열의 순열만 생성
    const shortStr = str1.length <= str2.length ? str1 : str2;
    const longStr = str1.length > str2.length ? str1 : str2;

    // 짧은 문자열의 순열을 생성
    const shortPermutations = getPermutations(shortStr);

    // 긴 문자열이 짧은 문자열의 순열 중 하나인지 확인
    return shortPermutations.includes(longStr);
}

// 테스트
const str1 = "Hello";
const str2 = "olleH";
const str3 = "World";

console.log(solution(str1, str2)); // true
console.log(solution(str1, str3)); // false

/*
문제 답안:
순열의 규칙을 지킨다. 문자열의 길이가 다르면 순열이 아님. 
1. 정렬하기
2. 출현 빈도 찾기 
내 답안:
모든 순열을 만들고 존재하는지 확인함 (시간 복잡도 높음)
 */

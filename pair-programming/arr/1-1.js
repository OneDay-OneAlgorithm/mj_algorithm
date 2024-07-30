/*
문자열이 주어졌을 때, 이 문자열에 문자가 중복돼 등장하는지 확인하는 알고리즘을 작성하라
 */

const inputs = [
    "",             // 빈 문자열
    "abcdef",       // 중복 없음
    "aabbcc",       // 중복 있음
    "abcABC",       // 대소문자 구분 (중복 없음)
    "aA",           // 대소문자 구분 (중복 없음)
    "1234567890",   // 중복 없음
    "112233",       // 숫자 중복 있음
    "hello",        // 중복 있음 ('l')
    "world",        // 중복 없음
    "javascript",   // 중복 있음 ('a')
    "!@#$%^&*()",   // 특수문자 중복 없음
    "!@#$%^&*()!",  // 특수문자 중복 있음 ('!')
    "a quick brown fox jumps over the lazy dog" // 스페이스 포함, 중복 있음 ('o', 'u', 'r', ' ', 'e')
]


// 각 문자열에 대해 재귀적으로 탐색해야 한다.
// 문자열의 시작부터 만들 수 있는 케이스들을 모두 탐색한다.

let result = 0;
inputs.forEach((input) => {
    let flag = false;
    for(let i = 0; i < input.length; i++) {
        // i를 기준으로 문자열 만들기.a
        input = input.replace(/\s+/g, '');
        const str = input.slice(0, i);
        // str과 같은 문자열이 존재하는지 확인
        if(input.includes(str)) flag = true;
    }
    if(flag) result++;
})

console.log(result);

/*
책 답안:
아스키 코드로 바꿔서 문자열 체크를 해서 답을 찾을 수 있다고 한다. // 입력에 제한이 있는 경우
내 답안:
문자열의 부분 문자열을 검색하는 식으로 구현해서 O(N)
따라서, 아스키로 바꿔서 푸는게 시간복잡도를 줄일 수 있다.
*/

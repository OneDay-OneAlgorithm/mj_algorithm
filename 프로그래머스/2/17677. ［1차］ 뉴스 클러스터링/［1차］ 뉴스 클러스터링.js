function solution(str1, str2) {
    const CONSTANT = 65536;

    const gram1 = make2gram(str1);
    const gram2 = make2gram(str2);
    
    if (gram1.length === 0 && gram2.length === 0) {
        return CONSTANT;
    }

    const intersectionSize = getMultisetIntersectionSize(gram1, gram2);
    const unionSize = getMultisetUnionSize(gram1, gram2);

    return Math.trunc((intersectionSize / unionSize) * CONSTANT);
}

function make2gram(str) {
    const result = [];
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length - 1; i++) {
        const bigram = lowerStr.substr(i, 2);
        if (/^[a-z]{2}$/.test(bigram)) {
            result.push(bigram);
        }
    }
    return result;
}

function getMultisetIntersectionSize(arr1, arr2) {
    const map1 = new Map();
    const map2 = new Map();

    arr1.forEach(item => map1.set(item, (map1.get(item) || 0) + 1));
    arr2.forEach(item => map2.set(item, (map2.get(item) || 0) + 1));

    let intersectionSize = 0;
    map1.forEach((count, key) => {
        if (map2.has(key)) {
            intersectionSize += Math.min(count, map2.get(key));
        }
    });
    return intersectionSize;
}

function getMultisetUnionSize(arr1, arr2) {
    const map1 = new Map();
    const map2 = new Map();

    arr1.forEach(item => map1.set(item, (map1.get(item) || 0) + 1));
    arr2.forEach(item => map2.set(item, (map2.get(item) || 0) + 1));

    const allKeys = new Set([...map1.keys(), ...map2.keys()]);

    let unionSize = 0;
    allKeys.forEach(key => {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        unionSize += Math.max(count1, count2);
    });
    return unionSize;
}
function solution(phone_book) {
    const hashTable = new Map();

    for (let phone of phone_book) {
        hashTable.set(phone, true);
    }

    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.slice(0, i);
            if (hashTable.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}
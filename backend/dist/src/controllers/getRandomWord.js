export default function getRandomWord(list, length, noDuplicates = false) {
    let randomWord = '';
    let newList1 = [];
    let newList2 = [];
    if (list.length < 1) {
        return 'no words in list, try again';
    }
    list.map((str) => {
        if (str.length === length) {
            newList1.push(str);
        }
    });
    if (newList1.length < 1) {
        return 'no words matching length, try again';
    }
    if (noDuplicates === true) {
        newList1.map((str) => {
            let arr = str.split('');
            if (new Set(arr).size === arr.length) {
                let word = arr.join('');
                newList2.push(word);
            }
        });
    }
    else {
        newList2 = newList1;
    }
    if (newList2.length < 1) {
        return 'no words without duplicates, try again';
    }
    else {
        let randomNumber = Math.floor(Math.random() * newList2.length);
        randomWord = newList2[randomNumber];
        return randomWord;
    }
}

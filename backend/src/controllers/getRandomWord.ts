export default function getRandomWord(
  list: string[],
  length: number,
  noDuplicates: boolean = false
) {
  let randomWord: string = '';
  let newList1: string[] = [];
  let newList2: string[] = [];

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
        let word: string = arr.join('');

        newList2.push(word);
      }
    });
  } else {
    newList2 = newList1;
  }

  if (newList2.length < 1) {
    return 'no words without duplicates, try again';
  } else {
    let randomNumber = Math.floor(Math.random() * newList2.length);
    randomWord = newList2[randomNumber];

    return randomWord;
  }
}

import { describe, it } from '@jest/globals';
import getRandomWord from './getRandomWord.js';

describe('getRandomWord()', () => {
    // this test if the return is one of the strings from the input array
    it('return a word from the imput string', () => {
        const result = getRandomWord(['abc', 'def', 'ghi'], 3);
        expect(result).toMatch(/abc|def|ghi/)
    })
  
    // this test if the return is the right amount of letters
    it('get a word with a certain number of letters', () => {
        const result = getRandomWord(['abc', 'abcd', 'abcde'], 5);
        expect(result).toBe('abcde')
    })

    // this test if you get no duplicate letters if you set noDuplicate to true
    it('get word with no duplicates', () => {
        const result = getRandomWord(['aabcd', 'abcde', 'abbcd', 'abcdd'], 5, true);
        expect(result).toBe('abcde')
    })
    
    // The following is three tests to see if you get a notice if there is not
    // words to return. The first is if the list is empty, the second is if there
    // is no words matching number of letters and the third is if there is no words
    // without duplicated letters(for the choosen word length) if you set noDuplicate
    // to true

    it('if list of words is empty', () => {
        const result = getRandomWord([], 5);
        expect(result).toBe('no words in list, try again')
    })
  
    it('no words matching length', () => {
        const result = getRandomWord(['abc', 'abcd'], 5);
        expect(result).toBe('no words matching length, try again')
    })
   
    it('no words without duplicates', () => {
        const result = getRandomWord(['aabcd', 'abbcd', 'abcdd'], 5, true);
        expect(result).toBe('no words without duplicates, try again')
    })


})
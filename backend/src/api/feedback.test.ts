import { describe, it } from '@jest/globals';
import feedback from './feedback.js';

describe('feedback()', () => {

  // this test if the returned data is the right format
  it('return the right data format', () => {
    const result = feedback('foo', 'foo');
    expect(result).toMatchObject([
        { letter: 'F', result: 'correct' },
        { letter: 'O', result: 'correct' },
        { letter: 'O', result: 'correct' }
      ])
  });

  // this test so the result for every letter is correct, missplaced or incorrect
  it('result is correct, incorrect or missplaced', () => {
    const result = feedback('Hello', 'Honey');
    expect(result).toStrictEqual([
      { letter: 'H', result: 'correct' },
      { letter: 'O', result: 'missplaced' },
      { letter: 'N', result: 'incorrect' },
      { letter: 'E', result: 'missplaced' },
      { letter: 'Y', result: 'incorrect' }
    ])
  })

  // this test if there is two of the same letters in the guess and one of them 
  // is correct, then the other one should be incorrect, not missplaced
  it('a letter should be incorrect (not missplaced) when a correct of the same letter is present', () => {
    const result = feedback('cykla', 'hallå');
    expect(result).toStrictEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'A', result: 'missplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'Å', result: 'incorrect' }
    ])
  })

})




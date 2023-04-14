export default function feedback(correct, guess) {
    let correctArray = correct.toUpperCase().split("");
    let guessArray = guess.toUpperCase().split("");
    let result = "";
    let resultObjects = guessArray.map((letter, index) => {
        if (letter === correctArray[index]) {
            result = "correct";
        }
        else if (correctArray.includes(letter)) {
            result = "missplaced";
        }
        else {
            result = "incorrect";
        }
        return { letter, result };
    });
    for (let i = 0; i < resultObjects.length; i++) {
        if (resultObjects[i].result === 'missplaced')
            for (let j = 0; j < resultObjects.length; j++) {
                if (resultObjects[j].letter === resultObjects[i].letter && resultObjects[j].result === 'correct') {
                    resultObjects[i].result = 'incorrect';
                }
            }
    }
    return resultObjects;
}

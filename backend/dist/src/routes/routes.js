var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import feedback from '../controllers/feedback.js';
import mongoose from 'mongoose';
import { Highscore } from '../models.js';
import getRandomWord from '../controllers/getRandomWord.js';
import commonEnglishWords from '../controllers/commonEnglishWords.js';
import * as uuid from 'uuid';
mongoose.connect(`${process.env.MONGODB_URL}`);
const router = Router();
const GAMES = [];
// START GAME
router.post('/api/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = {
        correctWord: getRandomWord(commonEnglishWords.commonWords, req.body.numberOfLetters, req.body.noDuplicate),
        guesses: [],
        wordLength: req.body.numberOfLetters,
        noDuplicate: req.body.noDuplicate,
        id: uuid.v4(),
        startTime: new Date(),
    };
    GAMES.push(game);
    res.status(201).json({ id: game.id });
}));
// POST GUESS
router.post('/api/games/:id/guesses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
    if (game) {
        const guess = req.body.guess;
        game.guesses.push(guess);
    }
    if (game !== undefined) {
        let result = yield feedback(game.correctWord, req.body.guess);
        if (req.body.guess === game.correctWord) {
            game.endTime = new Date();
            res.status(201).json(result);
        }
        else {
            res.status(201).json(result);
        }
    }
}));
// Highscore GET (name, time, guesses, wordLength, duplicate)
function getHighscore() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield Highscore.find().sort({ time: 1 });
        let data = JSON.parse(JSON.stringify(response));
        return data;
    });
}
router.get('/highscore', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const highscores = yield getHighscore();
    res.render('highscore', { highscores });
}));
//  Highscore POST
router.post('/api/highscore/:id/highscore', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
    if (game !== undefined) {
        let highscoreObj = {
            name: req.body.name,
            time: (game.endTime.getTime() - game.startTime.getTime()) / 1000,
            guesses: game.guesses.length,
            wordLength: game.wordLength,
            noDuplicate: game.noDuplicate,
        };
        const highscore = new Highscore(highscoreObj);
        yield highscore.save();
    }
    res.status(201).json({ data: req.body });
}));
export default router;

import { Router } from 'express';
import feedback from '../controllers/feedback.js'

const router = Router();

 // /feedback
router.get('/feedback', async (req, res) => {
    res.json(await feedback('cykla', 'hallå'))
})
 
// /highscore
 //     post
  
  

export default router;
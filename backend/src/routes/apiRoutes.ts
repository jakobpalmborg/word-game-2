import { Router } from 'express';
import feedback from '../controllers/feedback.js'

const router = Router();



router.get('/feedback', async (req, res) => {


    res.json(await feedback('cykla', 'hallå'))
})


  // /start
  //    get()
  
  // /feedback
  
  // /highscore


export default router;
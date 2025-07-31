import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
  console.log(res)
  res.send('Hello from Express backend on Render!');
})


export default router;
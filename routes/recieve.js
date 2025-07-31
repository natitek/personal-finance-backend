import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
  console.log(res)
  res.send('Hello from Express backend on Render!');
})


router.get('/:cus_id/:amount/:type',(req,res) => {

    const customer_id = req.params.cus_id;
    const amount = req.params.amount;
    const type = req.params.type;
  
  res.send(`user: ${customer_id} , amount ${amount} type ${type} `);
})



export default router;
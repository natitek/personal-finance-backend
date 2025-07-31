import express from 'express'
import router from './routes/recieve';

const app =  express();

app.use('/api/sms', router);




app.listen(port, () => console.log(`Server is Running on Port ${port}`))

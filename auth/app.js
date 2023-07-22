import express from 'express';

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

app.get('/api/status', (req, res) => {
   return res.status(200).json({
    service: 'auth api',
    status: 'up',
   }); 
}); 

app.listen(PORT, () => {
    console.info(`server running at ${PORT}`)
});
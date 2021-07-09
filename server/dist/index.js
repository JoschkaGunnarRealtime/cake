import app from './app.js';
app.listen(process.env.PORT, () => {
    console.log('Started Server on Port ' + process.env.PORT);
});

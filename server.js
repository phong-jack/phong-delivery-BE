const app = require('./src/app');


const PORT = process.env.PORT || 3055;



const server = app.listen(PORT, () => {
    console.log(`server listen on url: http://localhost:${PORT}`);
});
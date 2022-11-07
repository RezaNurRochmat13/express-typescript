const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 8001 || process.env.PORT;

app.get('/', (request, response) => {
    response.json({message: "Index page"});
});

app.listen(PORT, () => {
    console.log(`Application running at http://localhost:${PORT}`);
});
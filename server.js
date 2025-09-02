const http = require('http');
require('dotenv').config();   // <--- yahan add karo
const app = require('./Backend/app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
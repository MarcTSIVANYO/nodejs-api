const http = require('http');
const app = require('./App');

const server = http.createServer(app);
app.set('port', process.env.PORT || 3001);
server.listen(process.env.PORT || 3001);

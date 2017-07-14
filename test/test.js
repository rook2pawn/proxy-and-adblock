const proxyAdblock = require('../index.js');
const router = require('router-middleware');
const http = require('http');
const app = router();
app.use(proxyAdblock('http://google.com')); 


const server = http.createServer(app);

server.listen(5150);

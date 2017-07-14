# proxy and adblock

Proxy an entire website and run it through an adblocker

# works with 

* express
* router-middleware

# install

    npm install --save proxy-and-adblock

# use

    const proxyAdblock = require('proxy-and-adblock');
    const router = require('router-middleware');
    const app = router();
    app.use(proxyAdblock('http://site-to-proxy.com')); 

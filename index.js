const url = require('url').URL;
const path = require('path');
const request = require('request');

var proxy = function(site) {
  const myUrl = new url(site);
  console.log(myUrl);
  return function(req,res) {
      var address = myUrl.origin.concat(req.url);
      console.log(address);
      req.pipe(request(address)).pipe(res);
  }
};

module.exports = exports = proxy;

var dns = require('dns');
var util = require('util');

var promiseResolve = util.promisify(dns.resolve4);
async function asyncResolve() {
    var data = await promiseResolve('www.mum.edu');
    console.log(data);
}
asyncResolve();
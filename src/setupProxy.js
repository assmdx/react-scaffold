const proxy = require('http-proxy-middleware');

const options = {
    target: 'http://localhost:22020', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: false, // proxy websockets
    pathRewrite: {
        '^/server':''
    }
}
const exampleProxy = proxy(options)

module.exports = function(app) {
    app.use('/server', exampleProxy)
}
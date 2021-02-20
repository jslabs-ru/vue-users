const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

const { domain, clientId, audience } = require('./authConfig.json');

module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8888'
            }
        }
    },
    chainWebpack: config => {
        config.plugin('define').tap(definitions => {
            definitions[0] = Object.assign(definitions[0], {
                DOMAIN: JSON.stringify(domain),
                CLIENT_ID: JSON.stringify(clientId),
                AUDIENCE: JSON.stringify(audience)
            })
            return definitions;
        })
    }
}

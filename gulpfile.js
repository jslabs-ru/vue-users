const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const webpack = require('webpack');
const rimraf = require('rimraf');
const chalk = require('chalk');

function buildWithWebpack(callback) {
    var config = require(path.join(__dirname, 'src', 'webpack.config.js'));
    const compiler = webpack(config);
    compiler.run((err, stats) => {
        if (stats.hasErrors()) {
            const info = stats.toJson();
            info.errors.forEach(error => {
                console.error('Webpack error:', error);
            });
        } else {
            console.log(`Build succeeded, hash: ${chalk.green(stats.hash)}`);
        }
        callback();
    });
}

gulp.task('buildWithWebpack', buildWithWebpack);

gulp.task('cleanup', async function() {
    await rimraf('dist', () => {
        console.log('Done');
    });
})

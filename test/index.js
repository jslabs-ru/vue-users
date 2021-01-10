import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import Mocha from 'mocha';

const mocha = new Mocha();

const addSyncTestFiles = (dirs) => {
    _.forEach(dirs, dir => {
        fs.readdirSync(dir)
            .filter(file => file.substr(-3) === '.js')
            .forEach(file => mocha.addFile(path.join(dir, file)));
    });
}

addSyncTestFiles([
    __dirname + '/components'
]);

mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0;
});

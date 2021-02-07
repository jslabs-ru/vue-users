import { exec } from 'child_process';

export default function runCommand(command) {
    return new Promise((resolve, reject) => {
        return exec(command, (error, stdout, stderr) => {
            if(stderr) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

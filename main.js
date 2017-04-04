const exec = require('child_process').exec;
const os = require('os');
var buildCommand = "BABEL_ENV=node neutrino build";
var serverCommand = "BABEL_ENV=node babel-node server/index.js";

if(os.platform() == 'win32') {
  buildCommand = "SET BABEL_ENV=node&& neutrino build";
  serverCommand = "SET BABEL_ENV=node&& babel-node server/index.js";
}

exec(buildCommand,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});

exec(serverCommand,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});

const exec = require('child_process').exec;
const os = require('os');
var buildCommand = "BABEL_ENV=node neutrino build";
var serverCommand = "BABEL_ENV=node babel-node server/index.js";
var commandDelimeter ='; ';

if(os.platform() == 'win32') {
  buildCommand = "SET BABEL_ENV=node&& neutrino build";
  serverCommand = "SET BABEL_ENV=node&& babel-node server/index.js";
  commandDelimeter = '& ';
}

exec(buildCommand+commandDelimeter+serverCommand,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});

'use strict';

const childProcess = require('child_process');
const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };

// run the command 'npm start' with working directory ./client
childProcess.spawn('npm', args, opts);

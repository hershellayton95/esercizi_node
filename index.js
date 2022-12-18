const repl = require('node:repl');
const crypto = require('node:crypto');

repl.start('> ')
.on("close",()=>{
    console.log(crypto);
    console.log(crypto.randomUUID())
})
.close()

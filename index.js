var figlet = require('figlet');

figlet('non so che scrivere', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

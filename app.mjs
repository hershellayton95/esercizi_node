import fs from "node:fs"

fs.writeFile("file.txt","Some Text","utf8", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

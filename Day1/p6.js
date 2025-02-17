const fs = require('fs');
const append=() => {
    const data = "This is an appended data"
    fs.appendFile('data.txt',data,(err) => {
        if(err)
            throw err;
        console.log("Data append!");
    });
}
append();
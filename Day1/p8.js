const fs = require('fs');
fs.mkdir("mydir",(err) =>{
    if(err){
        console.error("Error Creating Directory:",err);
        return;
    }
    console.log("Directory created successfully");
});

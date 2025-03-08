const fs = require("fs")

const fileName = 'example.txt';
const content= "This is a file written using the node module fs";

fs.writeFile(fileName, content, (err)=>{
    if(err){
        console.log("An error occurred while writing the file: ", err);
        return;
    }
    console.log("Successfully wriiten on the file: ", fileName);
});

fs.readFile(fileName, 'utf-8', (err,data)=>{
    if(err){
        console.log("There was an error reading the file: ", 'fileName', err)
        return;
    }
    console.log("Successfully read the file", fileName)
    console.log("THE CONTENT IS: ", data);
});
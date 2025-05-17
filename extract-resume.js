const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('SoftwareEngineerAI.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('SoftwareEngineerAI.txt', data.text);
    console.log('Resume text extracted to SoftwareEngineerAI.txt');
}); 
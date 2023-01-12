const fs = require("fs");
const util = require("util");

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/** 
* Function to write data to JSON file given a destination path and content.
* @param {string} destination - Path to JSON file. // The file you want to write to.
* @param {object} content // The content you want to write to the JSON file.
* @param {void} // Does nothing.
*/

const writeToFile = (destination, content) => 
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
   err? console.log(err) : console.info(`\nSuccessfully wrote to ${destination}`);
  );

  /** 
* Function to write data to JSON file given a destination path and content.
* @param {string} destination - Path to JSON file. // The file you want to write to.
* @param {object} content // The content you want to write to the JSON file.
* @param {void} // Does nothing.
*/

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }else{
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
  });
};

const fs = require("fs");

let getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./books.json", (err, data) => {
      if (err) {
        reject(err);
      }

      let stringData = Buffer.from(data).toString();
      resolve(JSON.parse(stringData));
    });
  });
};
let writeData = (dataIndx) => {
    const dataWrite = JSON.stringify(dataIndx);
  return new Promise((resolve, reject) => {
    fs.writeFile("./books.json", dataWrite, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { getData, writeData };

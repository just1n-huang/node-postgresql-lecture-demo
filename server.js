const db = require("./db/index.js"); // when you require a folder and there is an index file, that file will end up getting loaded
const fs = require("fs");

/* this is the async callback turned into the readFile promise below
fs.readFile("seed.sql", (err, data) => {
    if (err) {
      console.log("error");
      console.log(err);
    } else {
      console.log("success");
      console.log(data.toString());
    }
  });
*/

// turn something async with a callback, and turn it into a promise
// attempting to do something with 'try'
// if not successful, do something else 'catch (ex)'
// 'await' works with promises, a promise needs to be created before it works
// promises are something asynchronous that can be successful or it can be fail
// function has to be marked 'async' to use 'await'
// promises are easier to use than async callback functions since you dont have to 'sniff out' whether you have any errors or not

// create readFile function and it will return a promise
const readFile = (file) => {
  // how do we create a promise?
  // return a new promise with two parameters resolve and reject
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
};

const setup = async function () {
  try {
    const SQL = await readFile("seed.sql");
    //connect to db
    await db.connect();
    await db.query(SQL);
    const response = await db.query(`
    SELECT *
    FROM users`);
    console.log(response.rows);
    console.log("success");
    // console.log(SQL);
  } catch (ex) {
    console.log("error");
    console.log(ex);
  }
};
setup();

const { log } = require('console');
const { writeFile } = require('fs');
const http = require('http');
const os = require('os');
// const Logger = require('./logger');
// const logger = new Logger();

const hostname = '127.0.0.1';
const port = 3000;


var information = {
  OSType: os.type(),
  Platform: os.platform(),
  RAM: os.totalmem(),
  USEDRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus()
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(information, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

writeFile('D:\NodeJs\\index.txt', JSON.stringify(information, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  // logger.log('print computer\'s infos');
  console.log('Completed task!');
});


// function getData(id) {

//   let c ;
//   setTimeout(() =>  {
// c= {
//    id,
//       name: "ngoc"
//  }
//   },0)
//     return c;
// }

// let a = getData(10);
// console.log(a);


function getData(callback) {
  setTimeout(() => {
      console.log('Introduced');
      callback('ngoc');
  }, 1000);
}
function processData(data, callback) {
  setTimeout(() => {
      console.log('Ten:', data);
      callback('ST22B');
  }, 1000);
}
function saveData(processedData, callback) {
  setTimeout(() => {
      console.log('Lop:', processedData);
      callback();
  }, 1000);
}
getData(function(data) {
  processData(data, function(processedData) {
      saveData(processedData, function(saveData) {
        console.log('Chay xong');
      });
  });
});
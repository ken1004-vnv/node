//callback hell
function getData(callback) {
  setTimeout(() => {
      console.log('Introduced');
      callback('Tran Viet Chinh');
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


async function abc(){
  // await 
  return "hello world";
}
abc().then((data) => {
  console.log(data);

});
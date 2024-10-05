import express from "express";
import morgan from "morgan";

let workExperience = [
  {
    name:"Front End Developer",
    start_date:"Jan 2015 ",
    end_date:"Jan 2015 ",
    description:" Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
  },
  {
    name:"Web Developer",
    start_date:"Mar 2012 ",
    end_date:"Dec 2014",
    description:" Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
  },
]
function item(element){
  return `
  <div class="w3-container">
          <h5 class="w3-opacity"><b>${element.name}</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${element.start_date}-${element.end_date}</h6>
          <p>${element.description}</p>
          <hr>
        </div>
  `
}
function buildExperien(){
  let data = ``;
workExperience.forEach((element) => {
  data +=  item(element);
});
return data;
}
let html = 
`
<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
</style>
</head>
<body >
<div class="container">
   ${buildExperien()}
</div>
</body>
</html>
`
const app = express();
app.use(morgan("combined"))
app.get('/', (req, res) => {
  res.send(html);
});

app.listen(3000, ()=>{
  console.log("server listening");
});
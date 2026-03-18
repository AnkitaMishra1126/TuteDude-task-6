const http = require('http');
const fs = require('fs'); 
const path = require('path');

const port = 3000;

const app = http.createServer((req, res) => {
    console.log(req.url);
    url=req.url;

    let filename='';
    if(req.url==='/home'){
        filename='./home.html';
    }
    else if(req.url==='/about'){
        filename='./about.html';
    }
    else if(req.url==='/contact'){
        filename='./contact.html';
    }
    else{
        filename='./404.html';
    }
    //creating the full path for the files
   const filePath= path.join(__dirname,filename);
   // read the file asynchronously
   fs.readFile(filePath, (err, data) => {
    if (err) {
        // if the file itself is missing
      console.error(err);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {

        // if the file exists
        const status = filename === './404.html' ? 404 : 200;
        res.writeHead(status, { 'Content-Type': 'text/html' });
        res.end(data);
    }
  });
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});

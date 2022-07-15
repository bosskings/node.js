// const Person = require('./person.js');
// const person1 = new Person('Wisdom', '42');
// person1.greetPerson();


// // making a folder with 
// const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'),{}, (err)=>{
//     if(err) throw err;
//     console.log('folder created...');
// });

//// create and write to a file
// fs.writeFile(path.join(__dirname, '/test','test.txt'),'Welcome to the test file',
//  err =>{
//     if(err) throw err;
//     console.log('File Created and written to...');

//     //append contents to a file
//     fs.appendFile(path.join(__dirname, '/test','test.txt'),' but then it got appended , ahahahah..',
//      err =>{
//         if(err) throw err;
//         console.log(' appended ');
//     });

// });

// // Read a file
// fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url)

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'), 
    //     (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200,{'content-Type':'Text/html'});
    //         res.end(content);
    //     });
        
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'), 
    //     (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200,{'content-Type':'Text/html'});
    //         res.end(content);
    //     });
        
    // }
    // //assume we had an API
    // if(req.url === '/api/users'){
    //     const users = [
    //         {name:'Dom Kings', age:'30'},
    //         {name:'Boss Kings', age:'39'},
    //     ];
    //     res.writeHead(200,{'content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
        
    // }

    // build a dynamic file path

    let filePath = path.join(__dirname,'public',
        req.url === '/'? 'index.html': req.url
    );
    //get file extension
    let extname = path.extname(filePath);

    //initial content type
    let contType = 'text/html';
    
    //check ext and set content type
    switch(extname){
        case '.js':
            contType = 'text/javascript';
        break;
        case '.css':
            contType = 'text/css';
        break;
        case '.json':
            contType = 'application/json';
        break;
        case '.png':
            contType = 'image/png';
        break;
        case '.jpg':
            contType = 'image/png';
        break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){//WHEN THE PAGE NOT FOUNT
                fs.readFile(path.join(__dirname,'public','404.html'),
                (err,content) =>{
                    res.writeHead(200,{'content-Type':'text/html'});
                    res.end(content, 'utf8');
                });

            }else{
                //some other error
                res.writeHead(500);
                res.end(`server Error ${err.code}`)
            }
        }else{
            //success
            res.writeHead(200, {'content-Type': contType});   
            res.end(content, 'utf8');
        }

    });
});
    
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
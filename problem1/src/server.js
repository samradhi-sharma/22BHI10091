//  here we are importing http module from node.js
const http = require('http');

// here we are importing calAverage function from Calculator.js
const{calAverage} = require('../../problem1/src/Calculator');

// here we are creating a server using http.createServer() method
http.createServer((req,res) =>{
    let body =' ';

    // whenever new data comes just append it to the body
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () =>{
        try{
            const data =JSON.parse(body);

            if(!data.numbers || !Array.isArray(data.numbers)){
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: 'Please include a numbers array'}));
                return;

            }
            
            // setting the response status code to 200 in order to show success
            res.writeHead(200,{
                'Content-Type': 'application/json'
          });

        //   this line explains that we are sending the calculated average to the response
          res.end(JSON.stringify({average: calAverage(numbers)}));
        }
        catch(error){
            res.writeHead(400,{'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'Invalid JSON'}));
        }
        // here we are catching the error and sending the error message to the response incase of any invalid json
        // a simple try and catch block is used to handle the errors 
    });


})
.listen(3005,()=>{
    console.log('Server is running at 3005 port address ');

})
// this line is pretty simple we are listening it on port address 3005
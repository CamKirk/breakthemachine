let http = require('http');
let fs = require('fs');

function main() {
    let server = http.createServer();

    server.on('request', (req, res) => {

        let reader = fs.createReadStream('../bigfile.json')
        reader.on('data', (chunk) => {
            console.log(chunk.toString())
        })
        reader.pipe(res);

    })

    server.listen(4000, ()=>{
        console.log('server started on port 4000');
        
    });
}

module.exports = main;
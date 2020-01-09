var http = require('http');

http.get('http://10.96.234.217:8081', resp => {
    let data = '';

    resp.on('data', (chunk)=>{
        data += chunk;
    });

    resp.on('end', () => {
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Client get error: " + err.message);
});
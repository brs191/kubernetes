var http = require('http');

http.get('http://172.18.0.2:8081', resp => {
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
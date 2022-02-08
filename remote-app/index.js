const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3333


const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const port = new SerialPort('COM5'),
baudRate=500;
const parser = new Readline()
port.pipe(parser)
//parser.on('serialdata', console.log);


http.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})

app.use( express.static( 'public' ))


io.on('connection', (socket)=>{
    console.log(`Socket ID: ${socket.id}`)

    //From WEB to Premiere
    socket.on("Request_Sequences", ()=>{
        io.emit('Request_Sequences_Ppro')
    })

    // From Premier to WEB
/*
    parser.on('data', function (data) {
        io.emit('data', { data: data });
        console.log (data);
    });
*/
    parser.on('data', function (data) {
        str = JSON.parse(data); //Then parse it
        console.log(str);
        io.emit('parsed-data', str);
      });
    
})

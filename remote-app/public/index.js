
'use strict';

//const socket = io();
/*
socket.on('data', function(data){
    console.log(data)
 });




// STEP 2
socket.on('data', (data)=>{

let seqs = JSON.parse(str)
console.log (seqs)

*/

let dataDisplay = document.getElementById('parsed-data');
let socket = io();

socket.on('connect', function () {
  socket.on('parsed-data', function (json) {
    console.log(json);
    //dataDisplay.innerText = json.state;
  });
});



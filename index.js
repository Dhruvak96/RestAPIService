const http = require('http')
//const fs = require('fs')
const fetch = require('node-fetch')
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })


})

server.listen(port, function (error) {
    if (error) {

        console.log('Something went wrong', error)

    }
    else {
        console.log('Server is listening to port ' + port)
        RestAPI();
    }
})

async function RestAPI() {
    var responseJSON;

    // fetch api
    const resp = await fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
        .then(res => res.json())
        .then(json => responseJSON = json)
        .catch(error => console.error(error));

    // console.log(resp);

    console.log('~~~~~~~~~~~~~~~~~~~~~~~ paid list of conf ~~~~~~~~~~~~~~~~~~~~~~~');
    resp.paid.map((item, key) => {
        console.log(item.confName, ', ', item.confStartDate, ', ', item.city, ', ', item.country, ', ', item.entryType, ', ', item.confUrl);
    })


    console.log('~~~~~~~~~~~~~~~~~~~~~~~ free list of conf ~~~~~~~~~~~~~~~~~~~~~~~');
    resp.free.map((item, key) => {
        console.log(item.confName, ', ', item.confStartDate, ', ', item.city, ', ', item.country, ', ', item.entryType, ', ', item.confUrl);
    })

   
}
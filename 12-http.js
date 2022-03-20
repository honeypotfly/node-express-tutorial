const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === '/'){
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about'){
        res.end('Welcome to our about page')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p> We cant find what you're looking for </p>
        <a href="/">Come back home</a>
        `)
    }
})

server.listen(5000)

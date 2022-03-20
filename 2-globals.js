// GLOBALS - No window bc there is no browser

// __dirname    - path to current directory
//__filename    - file name
// require      - function to use modules
// module       - info about current module (file)
// process      - info about env where the process is being executed
// There are more, but this is just a few examples

//console.log(__dirname)
//console.log(__filename)
//console.log(require)
//console.log(module)
//console.log(process)

console.log(__dirname)
setInterval(() => {
    console.log('Hello world')
}, 1000)

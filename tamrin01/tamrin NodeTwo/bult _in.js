const http = require('http')
const myhttp = http.createServer(
(req,res)=>{
    if(req.url === '/'){
        res.write('<h1>omid</h1>')
        res.end()
    }
}
)
myhttp.listen('5800',()=>{
console.log('faall');    
})
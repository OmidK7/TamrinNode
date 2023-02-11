const Emiter = require('./Parent')

const EventEmiter = new Emiter()

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const http = require('http')

let xhr = new XMLHttpRequest()

const myhttp = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.end('ok')
    }

    if(req.url === '/api/current-time'){
        const currentTime = async()=>{
             let time = await new Date()
             console.log(time);
             let Hours = time.getUTCHours()
             let min = time.getUTCMinutes()
             res.end(`<h1>current time => ${Hours}:${min}</h1>`)
        }
        currentTime()
    }

    if (req.url === '/api/person'){
        EventEmiter.on('personReady' , ()=> {
            xhr.open('GET','https://api.divar.ir/v8/web-search/mashhad/mobile-phones',false)
            xhr.onload = function() {
                
                 if ( xhr.status == 200 ) {
                    
                    let ob = (xhr.responseText)
                    res.end( `<h1>done  ${JSON.stringify({ob})}</h1> `)
                } else {
        
                    res.end( `<h1> Error: ${xhr.status}</h1>` )
                    
                }
            }
            xhr.send()
        })
       setTimeout( async() => {
           EventEmiter.Emit()
       }, 2000);
    }

    if (req.url === '/12'){
        res.end('<h1> 12 </h1>')
    }
})
myhttp.listen('5800')







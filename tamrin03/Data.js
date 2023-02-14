const fs = require('fs')

let getData = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./books.json',(err,data)=>{
            
            if(err){
                reject(err)
            }

            let stringData = Buffer.from(data).toString()
            
            resolve(JSON.parse(stringData))

        })
    }) 

}
let writeData = (dataIndx)=>{
    return new Promise((resolve,reject)=>{
        const dataWrite = JSON.stringify(dataIndx)    
        fs.writeFile('./books.json',dataWrite,(err , data)=>{
            if(err){
                reject(err)
            }
            resolve((data))
        })
    })

}

module.exports = {getData,writeData}
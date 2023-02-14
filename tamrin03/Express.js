const express = require('express')

const {getData,writeData} = require('./Data.js')

const {find,findIndex} = require('./funcs/util.js')


async function run() {
    const app = express()

    let books = await getData()
    app.use(express.json())

    app.get('/' , (req,res)=>{

        return res.send('<h1>Welcom</h1>')
    
    })
    app.get('/person' , (req,res)=>{
        
        return res.send(JSON.stringify(books))
    })
    
    app.get('/person/:id' , (req,res)=>{
    let id = req.params.id;
    const bookFind = find(id,books)
    console.log('in : ',bookFind);
    if(!bookFind){
        return res.status(404).send('book not find...')
    }
    return res.send(bookFind)

    })
    app.put('/person/:id' , (req,res)=>{
        const id = req.params.id
        console.log("books : ",books);
        let indexbook = findIndex(id,books)
        
        if(!indexbook){
            return res.status(404).send('book not find...')
        }
        console.log( "id",id);
        books[indexbook] = {
            id,
            ...req.body
        }
        writeData(books[indexbook])
        console.log( "bidyindex :",books[indexbook]);

    })
    app.listen(3100,()=>{
        console.log( `start listening on 3000`);
    })
}
run()

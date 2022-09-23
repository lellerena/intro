const { json } = require('body-parser')
const express = require('express')

const server = express()

server.use(json())

server.use((req, res, next)=>{
    console.log(req.method, req.url)

    next()
})

server.get('/', (req, res) =>{

    res.json({
        name: 'joe'
    })
})

server.post('/', (req, res) =>{
    res.send('post')
})

server.get('/hola', (req, res) =>{

    res.send('hola')
})

server.post('/hola', (req, res) =>{
    res.send('hola ' + req.body.name)
})

server.listen(3000)
console.log('servidor listo en puerto 3000')
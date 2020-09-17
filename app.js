// requerimos todo lo q vamos a suar

// requerimos express
let express = require('express');
// instanciar express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path')

app.get("/", function(req, res){
    let file = path.resolve('public/index.html')// resuelve la ruta completa de este archivo
    
    res.sendFile(file)
})

app.get("/ofertas", function(req, res){
    let file = path.resolve('public/ofertas.html')// resuelve la ruta completa de este archivo
    
    res.sendFile(file)
})

app.get('*', function(req, res){
    if (req.url.endsWith('.css')){
        let file = path.resolve('public/css' + req.url)
        return res.sendFile(file)
    }
    
    let images = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp', 'svg' ]
    let ext = req.url.split('.')[1]
    
    if (images.includes(ext)){
        let file = path.resolve('public' + req.url)
        console.log(file)
        return res.sendFile(file)
    }
    res.send('Not found')
})
app.listen(3000)
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})
app.use('/static', express.static(path.join(__dirname, 'public')))
io.on('connection', (socket)=>{
  socket.on('message', (msg)=>{
    io.emit('message', msg)
  })
})
http.listen(3101, ()=> console.log('运行中...'))

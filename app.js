const server = require('http').createServer();
const io = require('socket.io')(server);

server.listen(3000, '0.0.0.0', () => console.log('Socket.IO Server Running on PORT 3000'));

io.on('connection', client => {
  console.log('client connected')
  
  client.on('from_mobile', data => { 
    var d = new Date();
    var n = d.getTime();

    console.log(data)
    io.emit('to_raspi', data)
    console.log(n)
  });
  
  client.on('from_raspi', data => { 
    console.log(data)
    io.emit('to_mobile', data)
  });

  client.on('lu_raspi', data => { 
    console.log(data)
    io.emit('lu_mobile', data)
  });

  client.on('lg_raspi', data => { 
    console.log(data)
    io.emit('lg_mobile', data)
  });

  client.on('ka_raspi', data => { 
    console.log(data)
    io.emit('ka_mobile', data)
  });

  client.on('kr_raspi', data => { 
    console.log(data)
    io.emit('kr_mobile', data)
  });

  client.on('disconnect', () => {
    console.log('client disconnected')
  });
});
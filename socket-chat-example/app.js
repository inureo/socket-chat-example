var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

// onでバインドする感じ、バインドするイベントはDocument見るべし！ http://socket.io/docs/
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg); // emitでクライアント側にイベントを送信する
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
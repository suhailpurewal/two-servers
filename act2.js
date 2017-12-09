var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;
function handleRequest1(request, response){
	response.end("You're the best!!");
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function(){
	console.log("Server is listening" + PORT1)
});

function handleRequest2(request, response){
	response.end("You're the worst!!");
}
var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	console.log("Server is listening" + PORT2)
});
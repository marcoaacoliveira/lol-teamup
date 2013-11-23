var application_root = __dirname,
    fs = require('fs');
    http = require('http'),
    path = require('path'),

http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === "/") 
    var url = "index.html";
  else
    var url = request.url;
  var filePath = path.join(application_root, url);

  if (fs.existsSync(filePath)) {
    var resource = fs.readFileSync(filePath);
    response.writeHeader(200);
    response.write(resource);
  } else {
    var resource = fs.readFileSync(path.join(application_root, "404.html"));
    response.writeHeader(404);
    response.write(resource);
  }
  response.end();
}).listen(3000);

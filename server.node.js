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

  var fileType;
  switch (path.extname(filePath)) {
    case ".hbs":
    case ".html":
      fileType = "text/html";
      break;
    case ".js":
      fileType = "text/javascript";
      break;
    case ".css":
      fileType = "text/css";
      break;
    default:
      fileType = "text/plain";
  }

  if (fs.existsSync(filePath)) {
    var resource = fs.readFileSync(filePath);
    response.writeHeader(200, {
      'Content-Length': resource.length,
      'Content-Type': fileType
    });
    response.write(resource);
  } else {
    var resource = fs.readFileSync(path.join(application_root, "404.html"));
    response.writeHeader(404);
    response.write(resource);
  }
  response.end();
}).listen(3000);

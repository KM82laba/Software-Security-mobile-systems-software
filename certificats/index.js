const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./openSSL/LAB.key'),
  cert: fs.readFileSync('./openSSL/LAB.crt')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS World MAXIM!');
});

server.listen(3443, () => {
  console.log('Server running on https://localhost:3443/');
});

// klochkomaxim
// openssl genrsa -des3 -out CA.key 2048
// req -x509 -new -key CA.key -days 700 -sha256 -out CA.crt
// openssl genrsa -out LAB.KEY 2048
// openssl req -new -key LAB.key -out LAB.csr -sha256 -config LAB.cfg
// openssl x509 -req -in LAB.csr -CA CA.crt -CAkey CA.key -CAcreateserial -out LAB.crt -days 365 -sha256 -extensions v3_req -extfile LAB.cfg
var fs = require('fs')
var Readme=fs.readFileSync('Readme.txt','utf-8')
fs.writeFileSync('writeMe.txt',Readme)

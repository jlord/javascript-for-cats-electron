var fs = require('fs')
var marked = require('marked')

var header = fs.readFileSync('header.html').toString()
var footer = fs.readFileSync('footer.html').toString()
var content = marked(fs.readFileSync('README.md').toString())

fs.writeFileSync('index.html', header + content + footer)

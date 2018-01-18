var fs = require('fs');

var files = [];
for (var i = 1; i <4; i++) {
	files[files.length] = fs.readFileSync(`./frames/${i}.txt`,'utf8');
}
var w = 10;
var current = 0;
var render = () =>{
process.stdout.write('\033[2J');
process.stdout.write('\033[0f');
if(current === files.length){current=0;}
process.stdout.write(files[current++]);
};
setInterval(render, 1000 / w);


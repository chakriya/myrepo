#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Modify this script yada yada yada\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote:  " + out + "To: " + outfile);

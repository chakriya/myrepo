#!/usr/bin/env nano

var fs = require('fs');
var outfile = "prime.txt";



var isPrime = function(n){
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
	var m = Math.sqrt(n);
	for (var i=2;i<=m;i++){ 
		if (n%i==0) return false;}
	return true;
};


var findPrimes = function(nstring){
var iCount = 1;
for (var i=1;i<10000;i++){ 
	if(isPrime(i)){ nstring = nstring + i + ","; iCount++;}
	if(iCount ==101){return nstring;}
	}
return "error";
};

fs.writeFileSync(outfile, findPrimes("")); 
console.log("wrote " + findPrimes(""));

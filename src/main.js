/**
 * Created by yang on 14-10-29.
 */

var Test_Project_Dir = '../test/code';
var watchPath = process.argv[2] || Test_Project_Dir;
console.log(watchPath);
//watchFile

var fs = require('fs')
var ProjectAnalyzer = require('./ProjectAnalyzer');
var path = require('path');
var proAnalyzer = new  ProjectAnalyzer(path.join(__dirname,watchPath));
fs.watchFile(watchPath,function (curr, prev) {
   proAnalyzer.exec(curr,prev);
});
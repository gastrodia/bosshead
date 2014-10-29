/**
 * Created by yang on 14-10-29.
 */
var fs = require('fs');
var FileAnalyzer = require('./FileAnalyzer');
module.exports = ProjectAnalyzer = function(dir){
    this.projectRoot = dir;
};

function walk(path,onFileFunction){
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            walk(path + '/' + item,onFileFunction);
        }else{
            onFileFunction(path + '/' + item);
        }
    });
}

ProjectAnalyzer.prototype.fileAnalyze = function(file){
    var fileAnalyzer = new FileAnalyzer(file);
    fileAnalyzer.exec();
}

ProjectAnalyzer.prototype.exec = function(curr,prev){
    var proAnalyzer = this;
    walk(this.projectRoot,function(file){
        proAnalyzer.fileAnalyze(file);
    });
}


/**
 * Created by yang on 14-10-30.
 */
module.exports = FileAnalyzer = function(file){
    this.file = file;
};

var LineFileReader = require('./LineFileReader');
var StreamTodoReader = require('./StreamTodoReader');

var defaultReader = {
    read:function(line){
        console.log(line);
    }
}

FileAnalyzer.prototype.exec = function(){
    var lineReader = new LineFileReader(this.file);
    lineReader.read(function(line){
        var reader = defaultReader;
        if(line.indexOf('TODO') > -1){
            var nowReader = reader
            var streamTodoReader = new StreamTodoReader(nowReader);
            reader = streamTodoReader;
        }
        reader.read(line);
    },function(){

    })
}
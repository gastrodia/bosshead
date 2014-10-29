/**
 * Created by yang on 14-10-29.
 */
/**
 * Created by Yang on 2014/10/24.
 */
module.exports = LineFileReader = function(file){
    this.file = file;
}

var fs = require('fs');
var stream = require('stream');
var readLine = require('readline');

LineFileReader.prototype.read = function(reader,closer){
    var getReadStream = function(file){
        //console.log('初始化readSteam');
        var inStream = fs.createReadStream(file,{encoding:'utf-8'});
        var outStream = new stream();
        var readStream = readLine.createInterface(inStream,outStream);
        readStream.on('close',closer);
        return readStream;
    }
    var readStream = getReadStream(this.file);
    readStream.on('line',function(line){
        readStream.pause();
        reader(line);
        readStream.resume();
    });
}


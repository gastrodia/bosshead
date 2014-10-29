/**
 * Created by yang on 14-10-29.
 */

/*
* TODO
* 把stramReader看做是一个小桶 让他自己装水
* */
module.exports = StreamTodoReader = function(prevReader){
    this.prevReader = prevReader;
    this.prevReaderMethod
}

StreamTodoReader.prototype.read = function(line){
    console.log('----------------------------------------');
    console.log(line);
    console.log('----------------------------------------');
}
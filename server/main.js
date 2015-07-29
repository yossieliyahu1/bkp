
var fs = require('fs');

var main = {
    
    localPath : "C:/bkp",

    getList : function (req, res) {
        try {
            var file = this.localPath + "/paths.js";
            fs.readFile(file, function (err, data) {
                if (err) {
                    console.log(err);
                    fs.mkdir(main.localPath);
                    var empty = JSON.stringify({ "paths" : [] });
                    fs.writeFile(file, empty, function (err) {
                        if (err) throw err;
                        console.log('File created for the first time!');
                    });
                    res.send(empty);
                }
                else {
                    res.send(data);
                }
            });
        }
        catch (e) { 
            console.log('ERR in main.getList : [' + e + ']');
        }
    },

    saveList : function (req, res) {
        try {
            fs.writeFile(this.localPath + "/paths.js", JSON.stringify(req.body), function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('New data saved!');
                }
            });
        }
        catch (e) {
            console.log('ERR in main.saveList : [' + e + ']');
        }
    }
};


module.exports = main;
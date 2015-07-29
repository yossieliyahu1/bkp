

var paths = [];

var srv = {
    
    url : "http://localhost:3221",

    getList : function (clbk) {
        $.get(srv.url + "/getList", function (data) {
            clbk(JSON.parse(data));
        });
    },
    
    saveList : function (data, clbk) {
        $.ajax({
            type: 'POST',
            url: srv.url + "/saveList",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (res) {
                clbk(res);
            }.bind(this),
            error: function (e) {
                clbk(e);
            }
        });
    }
};


(function () { 

    srv.getList(function (data) {
        paths = data.paths;
        $.each(paths, function (index, value) { 
            $("#pathList").append("<li class='list-group-item'>" + value + "</li>");    
        });
    });
    
    $("#newPathBtn").click(function () {
        var newPath = $("#newPathInput").val();
        $("#pathList").append("<li class='list-group-item'>" + newPath + "</li>");
        paths.push(newPath);
        srv.saveList({ "paths": paths }, function (res) {
            console.log(res);
        });
        $("#newPathInput").val("");
    });

})();


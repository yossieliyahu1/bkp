

(function () { 

    //$(":file").filestyle({ buttonName: "btn-primary" });


    $("#newPath2").change(function () {
        var path = $(this).val();
        $("#pathList").append("<li class='list-group-item'>" + path + "</li>");
        $(this).val("");
    });

})();
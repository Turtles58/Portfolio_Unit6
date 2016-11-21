$("#content").load($("select").val());
$("select").change(function(){
    $("#content").load($("select").val(), function(data) {
        data = data.replace(/&lt;/g, "<");
        data = data.replace(/&gt;/g, ">");
        data = data.replace(/&#34;/g, '"');
        return data;
    });
    });
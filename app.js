

$("#btn").click(function(){

    $.getJSON("http://random.cat/meow")
    .done(function(data){
        $("#catImg").attr("src", data.file);
    })

    .fail(function(){
        alert("request is not rendering due to API issue or Net connection!");
    })
})

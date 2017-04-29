
$(document).ready(function(){
    $("#color").change(function(){
        var image_url = $("#type").val()+ "_" + $("#color").val() + ".jpg"
        $("#display-img").html('<img style="width: 100%;" src="../Images/cars/'+ image_url +'">')
    });
     $("#type").change(function(){
        var image_url = $("#type").val()+ "_" + $("#color").val() + ".jpg"
        $("#display-img").html('<img style="width: 100%;" src="../Images/cars/'+ image_url +'">')
    });
});

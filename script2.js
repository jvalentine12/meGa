
$(document).ready(function(){
    var $_GET = getQueryParams(document.location.search);
    console.log($_GET);
    $('.loc').each(function(){
        $(this).html('Location: '+$_GET.state);
    });
     $('.bid').each(function(){
        $(this).html('Bid: $'+ randomBid($_GET.price, 0));
    });
});
function randomBid (max, min){
    
    return Math.round(Math.random()*(max-min)+min);
}


function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}



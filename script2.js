
$(document).ready(function(){
    var $_GET = getQueryParams(document.location.search);
    console.log($_GET);
    $('.loc').each(function(){
        $(this).html('Location: '+$_GET.state);
    });
});

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



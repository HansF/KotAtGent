$(".panel").hide();
$("#map").show();

function fadePanels()
{
    $(".panel").fadeOut('fast');
}

$(".navbtn").click(function(event)
{
    switch($(this).attr('id'))
    {
        case "nav_map":
            if($("#map").is(':hidden'))
            {
                fadePanels();
                $("#map").fadeIn('fast');
            }
            break;
        case "nav_favorites":
            if($("#favorites").is(':hidden'))
            {
                fadePanels();
                $("#favorites").fadeIn('fast');
            }
            break;
        case "nav_filters":
            if($("#filters").is(':hidden'))
            {
                fadePanels();
                $("#filters").fadeIn('fast');
            }
            break;
        case "nav_settings":
            if($("#settings").is(':hidden'))
            {
                fadePanels();
                $("#settings").fadeIn('fast');
            }
            break;
    }
}); // end of navbtn click

function backToMap()
{
    if($("#map").is(':hidden'))
    {
        fadePanels();
        $("#map").fadeIn('fast');
    }
}

$('textarea').keydown(function(event) {
    trace("txt changed");
});

$('textarea').keydown(function(event) {
    // Act on the event
});


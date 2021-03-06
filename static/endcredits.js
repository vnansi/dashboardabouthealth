
$(document).ready(function () {

    $('a[name=creditos]').click(function (e) {
        e.preventDefault();

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titles').fadeIn(8000);
        $('#titles').fadeTo("slow");
        $('#titles').fadeIn();
        $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + (maskHeight ) + "px");
        $('#credits').show('slow');

        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 40000,
            complete: function () {
                $('#titles').fadeOut();
                $('.window').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#credits').css("bottom", "-" + ($(document).height() ) + "px");
        $('#titles').hide();
        $('.window').hide();
    });

    $('#titles').click(function () {
        $(this).hide();
        $('#credits').css("bottom", "-" + ($(document).height() ) + "px");
        $('.window').hide();
    });
});

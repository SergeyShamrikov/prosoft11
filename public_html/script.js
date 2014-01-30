$(document).ready(function(){
    
    resize();
    
    /* placeHolder */
    var placeHolder = 'Искать программное обеспечение, документацию, презентации...';
    $('#query').val(placeHolder).addClass('placeHolder');
    $('#query').focus(function(){
        if ( $(this).val()==placeHolder ) {
            $(this).val('').removeClass('placeHolder');
        }
    }).blur(function(){
        if ( $(this).val()=='' ) {
            $('#query').val(placeHolder).addClass('placeHolder');
        }
    });
    
    /* ie */
    if ( browser()=='Internet Explorer' ) {
        $('#ex_bot_inner_bot ul').css({
            'position': 'relative',
            'top': -7
        });
    }
    
    /* additional from clearFields */
    $('#clearFields').click(function(){
        setTimeout(function(){
            $('#query').val(placeHolder);
        }, 100);
    });
    
    /* скрываем/отображаем область расширенного поиска */
    $('#extend_link a').click(function(){
        if ( !$('#extend_area').hasClass('extend_area2') ) {
            if ( !$(this).hasClass('active') ) {
                $(this).addClass('active');
                $('#extend_area > div').fadeIn();
            } else {
                $(this).removeClass('active');
                $('#extend_area > div').fadeOut();
            }
        } else {
            if ( !$(this).hasClass('active') ) {
                $(this).addClass('active');
                $('#extend_area').fadeIn();
            } else {
                $(this).removeClass('active');
                $('#extend_area').fadeOut();
            }
        }
    });
    
    /* сброс формы поиска (всей) */
    $('#clearFields').click(function(){
        $('#_clearFields').click();
    });
    
    /* скрипт для календаря */
    
});

function resize()
{
    if ( $('body').height()<$('#page > table.cm').height() ) {
        $('body').css('height', $('#page > table.cm').height()+40);
    }
    if ( $(window).width()>=1280 ) {
        $('#page.page2').css('margin-left', 80);
    } else {
        $('#page.page2').css('margin-left', 30);
    }
}

function browser()
{
    var ua = navigator.userAgent;
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/Konqueror/) > 0) return 'Konqueror';
    if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
    if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';
    if (ua.search(/Gecko/) > 0) return 'Gecko';
    return 'Search Bot';
}

$(window).resize(function(){
    resize();
});
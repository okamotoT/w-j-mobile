"use strict"
$(function() {

$('#gotoJqm').on('click', function() {
    var url = 'http://jquerymobile.com/';
    jumpToExternalPage(url);
});


$('#gotoThemeroller').on('click', function() {
    var url = 'http://themeroller.jquerymobile.com/';
    jumpToExternalPage(url);
});

var jumpToExternalPage = function(url) {
    if(url) {
        $.mobile.loading('show', {
           text: 'Loading',
           textVisible: true,
           textonly: true
        });
        window.location.href = url;
        //$.mobile.loading('hide');
    }
    return false;
}

});

//$('body').onload(function () {
//    $('.about').hide();
//});

$(document).ready(function () {
    //$('#abtBtn').click(function () {
    //    $('.about').toggle();
    //});
});
function hide() {

    $('.about').hide();
    $('.contact').hide();
    $('.ask').hide();
    $('#msg').hide()
}

function send() {

    var sende = $('#sender').val();

    var messag = $('#message').html();
    if (sende == '') {
        $('#msg').show();
        $('#msg').css('color', 'red');
        $('#msg').html("Sender cannot be empty !");
    }
    else {
        $('#msg').show();
        if (messag.length <= 150) {
            $('#msg').css('color', 'red');
            $('#msg').html("Message cannot be less than 150 characters !");
        } else {
            $('#msg').css('color', 'white');
            $('#msg').html('Message Sent!');
            $('#sender').val(''); $('#message').html('');
        }
    }
}
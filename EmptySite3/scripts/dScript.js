

function ldOptions(optionVal, selectId) {
    //var selectt = document.getElementById(selectId);
    //selectt.options.length = 0;
    for (i = 0; i < optionVal.length; i++) {
        $('#' + selectId).append('<option value=' + optionVal[i] + '>' + optionVal[i] + '</option>');

    }
}

$(document).ready(function () {
    //$('html').click(function () {
    //    $('body').slideUp(2000);
    //});
    $('header').after('<div id="intro" class=hidee>\
                        <h2>You have arrived at the University of Blahblah\'s online survey!</h2>\
                        <p class="pgIntro">\
                        It was designed for people intending to attend our university.<br />\
                        As you progress new questions are going to reveal themselves.<br />\
                        It was designed in such a way to prevent the questionnaire from being overwhelming<br />\
                        Please, endeavour to answer with your best judgement.</p ></div >\
                        <hr style="border: 0.5px solid #08c" />');
    $('#intro').show('slow');

    $('#choice1').change(function () {
        if ($('#choice1').is(':checked')) {
            $('#intro2').after('<hr id="div1" style="display:none"/>');
            $('#picSec').append('<img id="imgg" alt="profilePic" src="images/Avatar.jpg" onclick="$(\'#upload\').click()" style="display:none"/>\
                                <input type="file" id="upload" onchange="upImg()" style="display:none" />');
            $('#form').append('<div id="Name" class=hidee><label>Full Name: </label><input type="text" name="lName" id="lname" placeholder="Surname" style="width:173.33px" required="required" /><input type="text" style="width:173.33px" name="fName" id="fname" placeholder="First name" required="required" /><input type="text" name="mName" id="mname" placeholder="Middle name" onfocusout="number()" style="width:173.33px" required="required" /></div>');

            $('#imgg').show('slow');
            $('#Name').show('slow');
            $('#div1').show('slow');



        }
        else {
            //$('#imgg').hide('slow'); $('#fName').hide('slow'); $('#div1').hide('slow');
            $('#div1').remove(); $('#picSec').empty(); $('#form').empty();
        }
    });






    $('input').keypress(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

});
function number() {
    if ($.trim($('#fname').val()).length >= 1 && $.trim($('#mname').val()).length >= 1 && $.trim($('#lname').val()).length >= 1) {
        $('#number').remove();
        $('#form').append('<div id="number" class=hidee><hr/><label for="number" style="border: none" >Phone Number: </label> <input type="tel" name="number" id="Number" onfocusout="country()" placeholder="012 3456 7890"/></div>');
        $('#number').show('slow');
        $('#errorlb').remove();
    }
    else {
        $('#form').append('<div class=hidee id=errorlb>Enter your full name</div>'); $('#errorlb').show('slow');
        $('#number').remove();
        $('#country').remove();
        $('#states').remove();
        $('#Faculty').remove();
        $('#department').remove();
        $('#Message').remove();
        $('#Done').remove();
        $('#donee').remove();
    }
}
function country() {

    try {
        var len = $.trim($('#Number').val()).length;
        if (len === 11) {


            $('#form').append('<div id="country" class="hidee"><hr/><label for="country">Country: </label><select id="countries" name="country" onchange="ldStates(this.selectedIndex)"></select></div>');
            var countries = ['Choose Your Country', 'Benin', 'Ghana', 'Nigeria'];
            ldOptions(countries, 'countries');
            $('#country').show('slow'); $('#errorlb').remove();
        } else {
            $('#form').append('<div class=hidee id=errorlb>Enter a phone number of length 11.</div>'); $('#errorlb').show('slow');
            $('#country').remove();
            $('#states').remove();
            $('#Faculty').remove();
            $('#Departments').remove();
            $('#Message').remove();
            $('#Done').remove();
            $('#donee').remove();
        }
    } catch (e) {
        $('#errorlb').remove();
        $('#form').append('<div class=hidee id=errorlb>Enter a valid phone number.</div>'); $('#errorlb').show('slow');

    }
}
    
function ldStates(indx) {
    $('#states').remove();
    if (indx >= 1) {
        $('#form').append('<div id="states" class=hidee><hr/><label for="state"> State: </label><select id="stateS" name="state" onchange=ldFaculties(this.selectedIndex)></select></div>');
        if (indx === 1) {
            $('#stateS').empty();
            var states = ['Choose Your State', 'Alibori', 'Atakora', 'Atlanyique', 'Borgou', 'Collines', 'Donga', 'Kouffo', 'Littoral', 'Mono', 'Ouemme', 'Plateau', 'Zou'];
            ldOptions(states, 'stateS');
        }
        else if (indx === 2) {
            $('#stateS').empty();
            var states = ['Choose Your State', 'Ashanti', 'Brong-Ahafo', 'Central', 'Eastern', 'Greater Accra', 'Nothern', 'Upper East', 'Upper West', 'Volta', 'Western'];
            ldOptions(states, 'stateS');
        }
        else if (indx === 3) {
            $('#stateS').empty();
            var states = ['Choose Your State', 'Abia', 'Adamawa', 'Anambra', 'Akwa Ibom', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi',
                'Enugu', 'Edo', 'Ekiti', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
                'Ogun', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];
            ldOptions(states, 'stateS');
        }
        $('#states').show('slow');
    } else {
        $('#states').remove();
        $('#Faculty').remove();
        $('#Departments').remove();
        $('#Message').remove();
        $('#Done').remove();
        $('#donee').remove();

    }
}

function ldFaculties(indx) {
    if (indx > 0) {
        $('#Faculty').remove();
        $('#form').append('<div id=Faculty class=hidee><hr /><label for="faculty">Faculty: </label><select id="faculty" name="faculty" onchange="ldDeparts(this.selectedIndex)"></select></div>');
        var faculties2 = ['Choose Your Faculty', 'Faculty of Arts', 'Faculty of Engineering', 'Faculty of Science'];
        ldOptions(faculties2, 'faculty')
        $('#Faculty').show('slow');
    } else {
        $('#states').remove();
        $('#Faculty').remove();
        $('#Departments').remove();
        $('#Message').remove();
        $('#Done').remove();
        $('#donee').remove();

    }
}

function ldDeparts(indx) {
    $('#Departments').remove();
    if (indx > 0) {
        $('#form').append('<div id=Departments class=hidee><hr/><label for="departments">Departments: </label><select id="departments" name="departments" onchange=shwMessage(this.selectedIndex)></select></div>');
        if (indx === 1) {
            var departments = ['Choose Your Department', 'Creative Arts', 'English', 'Linguistic Studies', 'History', 'Philosophy'];
            ldOptions(departments, 'departments');
        }
        else if (indx === 3) {
            var departments = ['Choose Your Department', 'Biochemistry', 'Chemistry', 'Computer Science', 'Geoscience', 'Mathematics'];
            ldOptions(departments, 'departments');
        }
        else if (indx === 2) {
            var departments = ['Choose Your Department', 'Chemical Engineering', 'Mechanical Engineering', 'Systems Engineering'];
            ldOptions(departments, 'departments');
        }
        $('#Departments').show('slow');
    } else {
        $('#Departments').remove();
        $('#Message').remove();
        $('#Done').remove();
        $('#donee').remove();

    }
}

function shwMessage(indx) {
    if (indx > 0) {
        $('#Message').remove();
        $('#fieldd').append('<div id=Message class=hidee><center><label for=Message id=msg>Message</label></center></div>');
        $('#msg').after('<div><textarea onchange=done() required=required placeholder="Type any Message that you wish to send to the school manemailment..." style="min-height: 100px;min-width: 900px;" id=Message name=Message></textarea></div>');

        $('#Message').show('slow');
    }
    else {
        $('#Message').remove();
        $('#Done').remove();
        $('#donee').remove();

    }
}
function done() {
    if ($.trim($('#Message').text()).length > 0) {
        $('#Done').remove();
        $('#fieldd').append('<div id=Done class=hidee><center><label style=\'border:none\'>Tick the box to show that you are done with the questions?</label><input type=checkbox id=done onchange="Donee()" /></center></div>');
        $('#Done').show('slow');
    } else {
        $('#Done').remove();
        $('#donee').remove();
    }
}
function Donee() {
    if ($('#done').is(':checked')) {
    $('#intro2').before('<div id=donee class=hidee><center><p>Thanks ' + $('#lname').val() + ' ' + $('#fname').val() + ' for your responses. We will review your answers and use it to structure improvements in the University of BlahBlah</p></center></div>');
        $('#donee').show('slow');
        $('#dForm').remove();
        $('#intro2').remove();

    }
    else {

    }
}
function upImg() {
    var imgg = document.getElementById('imgg'), pic = document.getElementById('upload').files[0], reader = new FileReader();
    reader.onloadend = function () {
        imgg.src = reader.result;
    }
    if (pic) {
        reader.readAsDataURL(pic);
    }
    else {
        imgg.src = "images/Avatar.jpg";
    }
}

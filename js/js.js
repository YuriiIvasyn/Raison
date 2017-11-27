

$(document).ready(function() {
    $('.minus').click(function () {
        var $usd = " USD";
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 10;
        count = count < 1 ? 1 : count;
        $input.val(count+$usd);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $usd = " USD";
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 10;
        $input.val(count+$usd);
        $input.change();
        return false;
    });

    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    }); 

    
});
$('li:contains("AI advisory")').click(function(){
    window.location.replace("../SpendingsAdvisory/section-5.html");
    
});
$('li:contains("collaborative funding")').click(function(){
    window.location.replace("../Collaboration/section-1_2.html");
});
$('li:contains("cryptocurrency assets")').click(function(){
    window.location.replace("../Crypto/section-10.html");
});

window.onload=function(){
 CDT();
};



$('.check-on[name=toggle-0]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-0 .toggle-bg").css("background-color","#ff5152");
    } else {
        $(".user-0 .toggle-bg").css("background-color","#dfdfdf");
    }
});

$('.check-off[name=toggle-0]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-0 .toggle-bg").css("background-color","#dfdfdf");
    } else {
        $(".user-0 .toggle-bg").css("background-color","#ff5152");
    }
});

$('.check-on[name=toggle-1]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-1 .toggle-bg").css("background-color","#ff5152");
    } else {
        $(".user-1 .toggle-bg").css("background-color","#dfdfdf");
    }
});

$('.check-off[name=toggle-1]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-1 .toggle-bg").css("background-color","#dfdfdf");
    } else {
        $(".user-1 .toggle-bg").css("background-color","#ff5152");
    }
});

$('.check-on[name=toggle-2]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-2 .toggle-bg").css("background-color","#ff5152");
    } else {
        $(".user-2 .toggle-bg").css("background-color","#dfdfdf");
    }
});

$('.check-off[name=toggle-2]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-2 .toggle-bg").css("background-color","#dfdfdf");
    } else {
        $(".user-2 .toggle-bg").css("background-color","#ff5152");
    }
});

$('.check-on[name=toggle-3]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-3 .toggle-bg").css("background-color","#ff5152");
    } else {
        $(".user-3 .toggle-bg").css("background-color","#dfdfdf");
    }
});

$('.check-off[name=toggle-3]').click(function() {
    if ( this.checked ) {
        // если checked ...
        $(".user-3 .toggle-bg").css("background-color","#dfdfdf");
    } else {
        $(".user-3 .toggle-bg").css("background-color","#ff5152");
    }
});

$('.section-1_3 .users-list li').click(function() {
    $(".pop-up-wrap").css("display","block");
});

$('.pop-up-wrap .cancel-btn').click(function(e) {
    e.preventDefault();
    $(".pop-up-wrap").css("display","none");
});

$('.pop-up-wrap .ok-btn').click(function(e) {
    e.preventDefault();
    $(".pop-up-wrap").css("display","none");
});

$('.header .menu-icon').click(function(e) {
    e.preventDefault();
    $(".slide-menu").css("left","0");
});

$('.slide-menu a').click(function(e) {
    e.preventDefault();
    $(".slide-menu").css("left","-1000px");
});
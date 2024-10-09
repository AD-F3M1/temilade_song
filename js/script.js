$(document).ready(function() {
    $("#formTwo").hide();
    $("#formThree").hide();
    $("#formFour").hide();

    $("#button1").click(function() {
        $("#formOne").hide();
        $("#formTwo").show();
    });

    $("#button2").click(function() {
        $("#formTwo").hide();
        $("#formThree").show();
    });

    $("#button3").click(function() {
        $("#formThree").hide();
        $("#formFour").show();
    });

    $("#button4").click(function() {
        $("#formFour").hide();
        $("#formOne").show();
    });
});
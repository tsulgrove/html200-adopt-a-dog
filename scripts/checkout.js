$(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        console.log($("#contactName").val());
        console.log($("#contactEmail").val());
        console.log($("#contactAddress").val());
        console.log($("#contactCity").val());
        console.log($("#contactState").val());
        console.log($("#contactZip").val());
        console.log($("#firstTimeYes").is(":checked"));
        console.log($("#firstTimeNo").is(":checked"));
        alert("Thank you. The form information has been received");
    })
});

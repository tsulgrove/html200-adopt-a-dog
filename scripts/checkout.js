/**
const form = document.querySelector("form")

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(document.getElementById("contactName").value);
    console.log(document.getElementById("contactEmail").value);
    console.log(document.getElementById("contactAddress").value);
    console.log(document.getElementById("contactCity").value);
    console.log(document.getElementById("contactState").value);
    console.log(document.getElementById("contactZip").value);
    console.log(document.getElementById("firstTimeYes").checked);
    console.log(document.getElementById("firstTimeNo").checked);
    alert("Thank you. The form information has been received");
});
*/
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

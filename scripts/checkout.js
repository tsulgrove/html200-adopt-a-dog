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
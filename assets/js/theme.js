function formSubmit(){
    
    var nameField = document.getElementById("first-last-name");
    var emailField = document.getElementById("email");
    var phoneField = document.getElementById("phone-number");
    var commentField = document.getElementById("comments");

    const allELements = [];
    allELements.push(nameField, emailField,phoneField,commentField);

    var empty_count = 0;
    allELements.forEach(element => { 
        
        if (checkField(element)){

            empty_count += 1;
            document.getElementById("error-message").style.color = "#C03221";
            document.getElementById("terms-check").style.border = "1px solid #C03221"

        }
        if (empty_count === 0){

            document.getElementById("error-message").style.color = "";

        }
    });

    //check if fields empty
        //if empty, red border
    //check if email, phone is valid
        //if not, red border, 
    //check if check box checked
        //if not, red border (LOL ES CERU)
}
function checkField(element){

    if (element.value.trim() === ""){
        element.style.border = "2px solid #C03221";
        console.log(element.style.borderBlockColor);
        return true;
    }
    else {
        element.style.border = "";
    }
}
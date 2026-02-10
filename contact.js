//get references for text input and button fields
var fName = document.getElementById("firstname")
var message = document.getElementById("lastname")
var submitBtn = document.getElementById("submitBtn")


//add click event listener, to get data when data is entered
submitBtn.addEventListener("click", function(){
    //store data in JavaScript object
    var data = {
        fName.value:message.value,
    }
})

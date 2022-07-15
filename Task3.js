//This function gets the text inputs and the radio group choice and displayes the in the empty p tag
function display() {
    var group = document.getElementsByName('fav_pic');
      
    for(i = 0; i < group.length; i++) {
        if(group[i].checked)
        document.getElementById("result").innerHTML
                = 'Hello! ' + document.getElementById('fname').value + ' ' + document.getElementById('lname').value + ', You liked ' + group[i].value + ' the most'; 
    }
}

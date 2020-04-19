function validate(){
    var uage=document.getElementById('age').value;
    var uphone=document.getElementById('phone').value;
    var upassword=document.getElementById('password').value;
    var uconfirmpassword=document.getElementById('confirmpassword').value;

   
    if(uage<12 || uage>50)
    {
        document.getElementById('age').innerHTML="Enter age between 12 and 50";
    }
    if(upassword==uconfirmpassword && uconfirmpassword!="" && upassword!="" && udob!="" && uemail!=""&& uage!="" && uphone!="" &&uname!="" )
    {
        document.getElementById('success').innerHTML="Successfully Registered";
    }
    else if(upassword!=uconfirmpassword)
    {
        document.getElementById('success').innerHTML="Enter coreect password";
    }
}
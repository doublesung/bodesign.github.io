$(".submit").click(function(){
   
    let nameText = $("#name").val();
    let namePatt = /\S/;
    
    if(!namePatt.test(nameText)){
        $("#name").addClass("error");
    }else {
        $("#name").removeClass("error");
    }

    let phoneText = $("#phone").val();
    let phonePatt = /^09[0-9]{8}$/;

    if(!phonePatt.test(phoneText)){
        $("#phone").addClass("error");
    }else {
        $("#phone").removeClass("error");
    }

    let emailText = $("#email").val();
    let emailPatt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!emailPatt.test(emailText)){
        $("#email").addClass("error");
    }else {
        $("#email").removeClass("error");
    }

    let addressText = $("#address").val();
    let addressPatt = /\S/;

    if(!addressPatt.test(addressText)){
        $("#address").addClass("error");
    }else {
        $("#address").removeClass("error");
    }

    let messageText = $("#message").val();
    let messagePatt = /\S/;

    if(!messagePatt.test(messageText)){
        $("#message").addClass("error");
    }else {
        $("#message").removeClass("error");
    }
    
    if(namePatt.test(nameText)
        && phonePatt.test(phoneText)
        && emailPatt.test(emailText)
        && addressPatt.test(addressText)
        && messagePatt.test(messageText)){
            alert("提交成功");
            $('#form').attr('onsubmit','return true;');
        }else {
            $('#form').attr('onsubmit','return false;');
        }

})

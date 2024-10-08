window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //เงื่อนไข: ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    //check ข้อมูลทั้งหมดว่ากรอกครบไหม
    let firstname = document.forms["myRegister"]["firstname"].value;
    let firstnameerror = document.getElementById('errormsg');
        if (firstname == "") {
            alert("Firstname must be filled out");
            firstnameerror.innerHTML = "Firstname must be filled out";
            return false;
        }
        
    let lastname = document.forms["myRegister"]["lastname"].value;
    let lastnameerror = document.getElementById('errormsg');
        if (lastname == "") {
            alert("Lastname must be filled out");
            lastnameerror.innerHTML = "Lastname must be filled out";
            return false;
        }

    let gender = document.forms["myRegister"]["gender"].value;
    let gendererror = document.getElementById('errormsg');
        if (gender == "") {
            alert("Gender must be filled out");
            gendererror.innerHTML = "Gender must be filled out";
            return false;
        }

    let bday = document.forms["myRegister"]["bday"].value;
    let bdayerror = document.getElementById('errormsg');
        if (bday == "") {
            alert("Birthday must be filled out");
            bdayerror.innerHTML = "Birthday must be filled out";
            return false;
        }

    let email = document.forms["myRegister"]["email"].value;
    let emailerror = document.getElementById('errormsg');
        if (email == "") {
            alert("Email must be filled out");
            emailerror.innerHTML = "Email must be filled out";
            return false;
        }

    let username = document.forms["myRegister"]["username"].value;
    let usernameerror = document.getElementById('errormsg');
        if (username == "") {
            alert("Username must be filled out");
            usernameerror.innerHTML = "Username must be filled out";
            return false;
        }

    //check password(pas) and retype password(retpass)
    var pas = document.getElementsByName('password')[0].value;
    var retpass = document.getElementsByName('password')[1].value;
    let errornone = document.getElementById('errormsg');
        if (pas === retpass) {
            alert("Ok")
        } else {
            alert('password not same');
            errornone.innerHTML = "password not same";
            return false;
        }

    return true;

    
}
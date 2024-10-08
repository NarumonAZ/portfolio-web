window.onload = loginLoad;
function loginLoad(){
	
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;

}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);	
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	console.log(username);

	const password = urlParams.get('password')
	console.log(password);

	var newUsername = document.getElementsByName('username')[0].value;
	var newpassword = document.getElementsByName('password')[0].value;
	console.log(newUsername);
	console.log(newpassword);
	

	console.table([username,newUsername],[password,newpassword])

	if (username == newUsername && password == newpassword) {
		alert("Ok");
		return false
	} else {
		alert('Noob');
		return false;
	}

}
window.onload = pageLoad;

function pageLoad(){
	var buttonstart = document.getElementById("start");
    buttonstart.onclick = startGame;
}

function startGame(){

    let numberbox = document.getElementById('numbox');
        if (numberbox.value == "") {
            alert("Numberbox must be filled out");
			return;
        }
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	x.innerHTML = second;

	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen

		if(second <= 0){
			alert("Time out");
			clearInterval(timer);
			timer = null;
			clearScreen();
			x.innerHTML = null;
		}

		if(allbox.length <= 0){
			alert("Win!");
			clearInterval(timer);
			timer = null;
			clearScreen();
			x.innerHTML = null;
		}

		second--;
		x.innerHTML = second;
		}
	}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");
	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}





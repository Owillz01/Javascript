// var student = [
// 	{   'name' : 'Joy',
// 		'level' : '300',
// 		'course' : 'computer science',
// 		'firstSemester' : 70,
// 		'secondSemester' : 80,
// 	},

// 	{   'name' : 'Bola',
// 		'level' : '100',
// 		'course' : 'computer science',
// 		'firstSemester' : 78,
// 		'secondSemester' : 84,
// 	},

// 	{   'name' : 'Shola',
// 		'level' : '200',
// 		'course' : 'computer science',
// 		'firstSemester' : 73,
// 		'secondSemester' : 70,
// 	},
// ];

// student [3] = {  
// 		'name' : 'Shola',
// 		'level' : '200',
// 		'course' : 'computer science',
// 		'firstSemester' : 70,
// 		'secondSemester' : 80,};

// function average(firstSemester, secondSemester){
// 	var avrg = (firstSemester + secondSemester)/2;
// 	document.write(avrg);
// 	Math.round(avrg);
// }

// // average();
// average(student[2].firstSemester, student[2].secondSemester);


// var text = document.getElementById("welcome").innerHTML;
// // alert(text);


// var story = document.getElementById("story").innerHTML;
// var story = document.getElementById("story").style.backgroundColor = "purple";
// story = document.getElementById("story").style.color = "red";

// var input = document.getElementById("enterName").value = "James";
// alert(input);
// var inpu = document.getElementById("enterEmail").value = "James@gmail.com";
// alert(inpu);
// var inpt = document.getElementById("enterPassword").value = 11313;
// alert(inpt);


// if (inpt != 121313) {
// 	alert("Email or Password is wrong")
// }

// else{
// 	alert("login successful")
// };

// var inputTag = document.getElementsByTagName("input");
// inputTag[1].value = "JohnDeo@gmail.com";
// inputTag[2].value = "JohnDeo**";

// function mouseOver(){
// alert("welcome");
// };

// function mouse(){
// document.getElementById("square").style.backgroundColor = "blue";
// };

// function mouse1(){
// document.getElementById("square").style.backgroundColor = "yellow";
// };

// function clickMe(){
// 	document.getElementById("square").style.backgroundColor = "red";
// }


// var inputTag = document.getElementsByTagName("input");

// function myForm(){
// 	if (inputTag[0].value==""){
// 		alert("please enter your name");
// 	}

// 	else if (inputTag[1].value=="") {
// 		alert("please enter your Password");
// 	}

	// else if (inputTag[1].value!=12345678) {
	// 	alert("Password incorrect");
	// }

// 	else{
// 		alert("welcome");
// 	}

// }


// function showName(){
// 	document.write("bola");
// }

// setTimeout(showName, 5000);

var myTime = document.getElementById("displayTime");

function showtime(){
	var date = new Date();
	myTime.innerHTML = date;
}

setInterval(showtime, 1000);

// var timer = 0;
// function Timer(){
	
	
// 	if (timer!=8) {
// 		document.write(timer + "<br>");
// 		timer++;
// 	}
// 	else{
// 		clearInterval(timer());
// 	}
// }
// setInterval(Timer, 1000);
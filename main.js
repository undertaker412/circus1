name = prompt('Как вас зовут?');
alert ("Добро пожаловать в цирк, " + name +"!");






let c = document.getElementById("circus");

 c.onclick = function ()
 {
 	alert (name +", показать фокус?");
	let song =document.getElementById("song");
	song.muted= false;
	song.volume=0.5;
	song.play();
	
 };


		var i = 0;
		var type = 1;
		function SetGraT() {
			var SetGra = document.getElementById("SetGra");
			var SetGra2 = document.getElementById("SetGra2");
			var SetGra3 = document.getElementById("SetGra3");
			i+=0.5;

			if (i == 100 && type==1) {
				i = 0;
				type = 2;
			}
			if (i == 100 && type==2) {
				i = 0;
				type = 3;
			}
			if (i == 100 && type==3) {
				i = 0;
				type = 1;
			}
			
			if(type==1){
				SetGra.style.background = "repeating-radial-gradient(red, yellow, lightblue "+i+"px)";
				SetGra2.style.background = "repeating-linear-gradient(90deg,red, yellow, lightblue "+i+"px)";
				SetGra3.style.background = "linear-gradient(to top, yellow "+i+"%, black)";
				SetGra2.style.perspective = (i+100)+"px";
				SetGra.style.perspective = (i+1000)+"px";
				
				}
			else if(type==2){
				SetGra.style.background = "repeating-radial-gradient(red "+i+"px, black, lightblue,grey )";
				SetGra2.style.background = "repeating-linear-gradient(180deg,red "+i+"px, black, lightblue,grey)";
				SetGra3.style.background = "linear-gradient(to bottom, black "+i+"%, yellow )";
				SetGra2.style.perspective = (i+100)+"px";
				SetGra.style.perspective = (i+1000)+"px";
			}
			else if(type==3){
				SetGra.style.background = "repeating-radial-gradient(white,black "+i+"px, lightblue,cadetblue	 )";
				SetGra2.style.background = "repeating-linear-gradient(270deg,white,black "+i+"px, lightblue,cadetblue)";
				SetGra3.style.background = "linear-gradient(to bottom,white "+i+"%, black  )";
				SetGra2.style.perspective = (i+100)+"px";
				SetGra.style.perspective = (i+1000)+"px";
			}
			
			
			/* SetGra.style.top =""	+ i + "px"; */ 
				

			setTimeout(SetGraT, 10);

			//document.getElementById("SetGra").style.background;
		}
	
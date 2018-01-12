console.log('Loaded!');
//move image on click

/*var image= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
	marginLeft= marginLeft + 5;
	image.style.marginLeft = marginLeft+ 'px';
}
console.log("fine");

image.onclick = function(){
	var interval= setInterval(moveRight,50);
};

*/
var button = document.getElementById('counter');
button.onclick = function(){
	//create request to counter endpoint
	var request= new XMLHttpRequest();
	console.log('1');
	//Cpture response and store it in a variable
	request.onreadystatechange= function(){
		if (request.readyState === XMLHttpRequest.DONE) {
			//take some action
			console.log('2');
			if (request.status===200) {
				var counter= request.responseText;
				console.log(counter);
				console.log('3');
				span=document.getElementById('count');
				span.innerHTML= counter.toString();
			}

		}
		//not yet done
	};
	//make request
	request.open('GET','http://localhost:8080/counter');
	request.send(null);
	
};
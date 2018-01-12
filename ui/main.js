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

//submit name


var submit = document.getElementById('submit_btn');
submit.onclick=function(){
	var nameInput= document.getElementById('name');
	var name= nameInput.value;
	//create request object
	var request= new XMLHttpRequest();
	console.log('1');
	//Cpture response and store it in a variable
	request.onreadystatechange= function(){
		if (request.readyState === XMLHttpRequest.DONE) {
			//take some action
			console.log('2');
			if (request.status===200) {
				console.log(name);
				//capture a list of names and render as a list
				var names= request.responseText; //returns text
				names= JSON.parse(names); // making it bac into an array object1
				var list='';
				for(var i=0;i<names.length;i++){
					list+= '<li>' + names[i] + '</li>';
				}
				console.log(list);
				var ul = document.getElementById('namelist');
				ul.innerHTML=list;			
			}

		}
		//not yet done
	};
	
	request.open('GET','http://localhost:8080/submit-name?name='+name,true);
	request.send(null);
	
};
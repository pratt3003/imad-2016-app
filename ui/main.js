console.log('Loaded!');
//move image on click

var image= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
	marginLeft= marginLeft + 5;
	image.style.marginLeft = marginLeft+ 'px';
}
console.log("fine");

image.onclick = function(){
	var interval= setInterval(moveRight,50);
};
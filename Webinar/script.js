var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

button.onclick = function() {
   	var childLinksOfP = firstPar.children;
    	
   	for (var i = 0; i < childLinksOfP.length; i++) {
		childLinksOfP[i].classList.add("some-class");
	}

	var links = document.getElementsByClassName('some-class');

	for (var i = 0; i < links.length; i++) {
		links[i].style.color = 'green';
	}
}

var paragraph = document.getElementById('container').lastChild;	
paragraph.addEventListener('click', function(event) {
	if (event.target.tagName == 'A') {
		event.preventDefault();
		alert(event.target.getAttribute('HREF'));
	}
});
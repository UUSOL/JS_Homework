var table = document.getElementsByTagName('table')[0];
var button = document.getElementsByTagName('tbody')[0].lastElementChild;
var tBody = document.getElementsByTagName('tbody')[0];
button.lastElementChild.classList.add('button');

button.addEventListener('click', function(){
    var row = table.insertRow(0);

    for (var i = 0; i < 3; i++) {
        row.insertCell(i);
    }
});

function handleBlur() {
		event.target.parentElement.innerHTML = event.target.value;
	}

tBody.onclick = function() {
	event.stopPropagation();
	var target = event.target;
	var t = target.textContent;

	if (target.tagName == 'TD' && !target.classList.contains('button')) {
  		target.innerHTML = '<input type="text" onblur=handleBlur() maxlength = "12"/>';
  		var inp = target.children[0];
  		inp.value = t;
  		inp.focus();
  		inp.onkeyup = function(event) {
  				if (event.key == 'Enter') {
  					target.children[0].blur();
  				}
  		}
 	}
}
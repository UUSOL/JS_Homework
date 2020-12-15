var inputs = document.getElementsByTagName('input');
var x = inputs[0];
var y = inputs[1];
var button = inputs[2];

var form = document.getElementsByTagName('form')[0];

form.onkeyup = function() {
	event.stopPropagation();
	button.disabled = (x.value.trim() && y.value.trim()) ? false : true;
}

function checkValue(val) {
	return 	typeof val == 'number' && !Number.isNaN(val) && 
			Number.isInteger(val) && val <= 10 && val >= 1;
}

button.onclick = function() {
	event.preventDefault();

	if (checkValue(+x.value) && checkValue(+y.value)) {
		handleTable(+x.value, +y.value);
	} else {
		alert('Please enter only number from 1 to 10');
	}
}


function handleTable(valX, valY) {
	var tBody = document.createElement('tbody');
	
	var table = document.getElementsByTagName('table')[0];
		
		if (table) {
			oldBody = document.getElementsByTagName('tbody')[0];
			table.replaceChild(tBody, oldBody);
		} else {
			table = document.createElement('table');
			table.appendChild(tBody);
			document.body.appendChild(table);
		}

		for (var i = 0; i < valY; i++) {
			var row = table.insertRow(i);

			for (var j = 0; j < valX; j++) {
				var cell = row.insertCell(j);
				if ( (i + j) % 2 == 0 ) {
					cell.classList.add('paint-cell');
				}
			}
	}

	table.onclick = function() {
		var tds = document.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++) {
			tds[i].classList.toggle('paint-cell');
		}
	}	
}
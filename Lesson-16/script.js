var bool, bool2;

document.body.onload = function () {
	bool1 = (localStorage.getItem('users_page_1')) ? true : false;
	bool2 = (localStorage.getItem('users_page_2')) ? true : false;
}

function loadUsers(page) {
	if (!page) page = 1;

	if (page == 1 && bool1 || page == 2 && bool2) {
		try {		
			var data = JSON.parse(localStorage.getItem('users_page_' + page))
			genBlog(data, data.length, page);
		} catch(e) {
			genError();
		}

	} else {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://reqres.in/api/users?page='+page);

		xhr.onload = function() {
			var statusType = +String(this.status)[0];

			if (statusType === 2) {
				try {
            	   	var data = JSON.parse(this.response).data;
               		localStorage.setItem('users_page_' + page, JSON.stringify(data));
               		genBlog(data, data.length, page);
        		} catch(e) { 
        			genError();
        		}
			}
		};

		xhr.send();
	}
}
		
function genBlog(data, len, page) {
		//hidden error message
		var h1 = document.getElementsByTagName('h1')[0]
		if (h1) h1.innerHTML = '';
		
		//generate new main tag with content
		var main = document.createElement('main');
	    var nav = document.createElement('nav');
    	var startIndex = (page == 1) ? 1 : 7;

    	for (var i = 0; i < len; i++) {
       	
       		var a = document.createElement('a');
       			a.innerHTML = 'User ' + (startIndex + i);
       			a.setAttribute('href', '#');
       			a.setAttribute('id', i);
       	
       		if (i == 0) a.classList.add('focused');
        		nav.appendChild(a);
			}

		var button = document.createElement('button');
    		button.innerHTML = (page == 1) ? 'Next' : 'Back';
    		
    	nav.appendChild(button);
    	main.appendChild(nav);

    	var div = document.createElement('div');
    		div.classList.add('demo');
      
    	var img = document.createElement('img');
    		img.setAttribute('src', data[0]['avatar']);
    		div.appendChild(img);

    	var inDiv = document.createElement('div');
    	var p1 = document.createElement('p');
    		p1.innerHTML = 'First Name : ' + data[0]['first_name']
    
    	var p2 = document.createElement('p')
	    	p2.innerHTML = 'Last Name : ' + data[0]['last_name'];
	
		inDiv.appendChild(p1);
		inDiv.appendChild(p2);
                
    	div.appendChild(inDiv);
    	main.appendChild(div);


    	var oldMain = document.getElementsByTagName('main')[0];        
        if (oldMain) {
        	document.body.replaceChild(main, oldMain);
        } else {
            document.body.appendChild(main);
            document.getElementById('init').classList.add('hide');
        }

    main.onclick = function() {
		event.stopPropagation();
		
		if (event.target.tagName == 'A' && !event.target.classList.contains('focused')) {
			event.preventDefault();
			
			var target = event.target;
			var navChild = nav.children;

			for (var i = 0; i < navChild.length - 1; i++) {
				navChild[i].classList.remove('focused');
			}

			var index = target.getAttribute('id');
			img.setAttribute('src', data[index]['avatar']);
			p1.innerHTML = 'First Name : ' + data[index]['first_name'];
			p2.innerHTML = 'Last Name : ' + data[index]['last_name'];
			target.classList.add('focused');
		}
	}

	button.onclick = function() {
		event.stopPropagation();
		page = (page == 1) ? 2 : 1;
		loadUsers(page);
	}
}

function genError() {
	// reset all values and set to init
	localStorage.clear();
	
	var h1 = document.createElement('h1');
		h1.innerHTML = 'Sorry something gone wrong. Please try again';
	
	var button = document.getElementById('init').classList.add('hide');
	
	var main = document.getElementsByTagName('main')[0];
	if (main) main.remove();

	var oldH1 = document.getElementsByTagName('h1')[0];
	if (oldH1) {
		document.body.replaceChild(h1, oldH1);
	} else {
		document.body.appendChild(h1);
	}
}

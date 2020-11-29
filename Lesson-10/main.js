////////// Task 1 //////////////////
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
};

Animal.prototype.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

Animal.prototype._formatFoodAmount = function() {
	return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
};



function Cat(name) {
	Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
	Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
}



//////////////// Task 2 /////////////////
function deepClone(origin, clone = {}) {
   	if (!origin || typeof origin !== 'object') {
   		return origin;
   	}

   	for (var key in origin) {
    	if (typeof origin[key] === 'object' && origin[key] !==null && !origin[key].length) {
    		clone[key] = deepClone(origin[key]);
    	}
    	else if (Array.isArray(origin[key])) {
    		clone[key] = []
    		for (var i = 0; i < origin[key].length; i++) {
    			clone[key].push(deepClone(origin[key][i]));
    		}
    	} 
    	else {
    		clone[key] = origin[key];
    	}
    }

   	return clone;
}

 ////////////Task 3 //////////////
function deepEqual(origin, origin2, bool = true) {
   	if (typeof origin !== typeof origin2) return false;
   	if (!origin || !origin2 || typeof origin !== 'object' || typeof origin !== 'function') return origin === origin2;

   	if (Array.isArray(origin)) {
   		if (origin.length !== origin2.length) return false;
		for (var i = 0; i < origin.length; i++) {
			bool = deepEqual(origin[i], origin2[i]);
			if (!bool) return bool;
		}
	} 
	else if (typeof origin === 'function') {
    		bool = origin.toString() === origin2.toString();
   	}
   	else {
   		if (Object.keys(origin).length !== Object.keys(origin2).length) return false;
		for (var key in origin) {
			bool = deepEqual(origin[key], origin2[key]);
			if (!bool) return bool;
		}
   	}

   	return bool;
}


/////////  Test ////////
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

deepEqual(initialObj, clonedObj)
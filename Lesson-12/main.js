///// Task 1 /////
function convertToObj(arr) {
	if (!Array.isArray(arr) || !arr.length) {
   		return 'Sorry. It works only with arrays of strings';   	
   	}
  	
  	return arr.map(function(el) {
   		return {name: el};
	});
}

///// Task 2 /////
function convertTime(arr) {
	if (!Array.isArray(arr) || !arr.length) {
   		return 'Sorry. It works only with arrays';   	
   	}

   	return  'Текущее время : ' + arr.reduce(function(acc, curr) {
   		return acc + ' : ' + curr;
   	})
}

///// Task 3 /////
function countVowels(sent) {
	if (!sent || typeof sent !== 'string') {
   		return 'Sorry. It works only with texts as a string';   	
   	}

   	var vowels = 'aeiou';

    var result = sent.split('')
                     .filter(function(el) {
                        return vowels.includes(el);
                      });
    
    return result.length;
}

///// Task 4 /////
function countSentencesLetters(text) {
	if (!text || typeof text !== 'string') {
   		return 'Sorry. It works only with texts as a string';   	
   	}
	// saved initial sentence for representation in console.log
	var sentence = text.split(/(?<=[!\.\?]) /g);


	var words = sentence.map(function(el){ 
							return el.split(/[\?\.!, :]/);
						})
						.filter(function(el){ 
							return el !== ''; 
						});

	for (var i = 0; i < sentence.length; i++) {
		console.log('Количество букв в предложении - ' + sentence[i] + ' : ' + words[i].join('').length);
	}
}

///// Task 5 /////
function findBigWord(text) {
   	if (!text || typeof text !== 'string') {
   		return 'Sorry. It works only with texts as a string';   	
   	}

   	var trackObj = {} 
        
        text.split(/[!\.\?, :;]/)
            .filter(function(el) { 
            	return el !== '';
            })
            .map(function(el) {
             	return el.toLowerCase();
             })
            .forEach(function(el) {
           		if (el in trackObj) {
           			trackObj[el]++; 
           		} else {
           			trackObj[el] = 1; 	
                }
            });

    var longestWord = '';
    var times = 0;
    
    for (var key in trackObj) {
        if (trackObj[key] > times) {
            longestWord = key;
            times = trackObj[key];
        }
	}
    
    return 'Максимальное число повторений у слова ' + longestWord + ' - ' + times;
}



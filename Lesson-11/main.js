//////// Task 1 ////////////////////
function filterNumbersArr(numbers) {
  return numbers.filter(function(el) {
    return el > 0;
  });
}

////// Test ///////////
filterNumbersArr([-1, 0, 2, 34, -2]);




///////////Task 2 /////////////
function findFirstPosNum(arr) {
  return arr.find(function(el) {
    return el > 0;
  })
}

///// Test ///////
findFirstPosNum([-1, 0, 2, 34, -2]);




//////////Task 3 ///////////
function isPalindrome(str) {
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) return false;
  }

  return true;
}

///Test //////////
isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false




//////////Task 4 /////////////////
function areAnagrams(str1, str2) {
  if (str1.length != str2.length) return false;    
  for (var i = 0; i< str1.length; i++) {
    if (str2.toLowerCase().indexOf(str1[i].toLowerCase()) < 0) return false;
  }

  return true;
} 

/// Test ////////
areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false




////////////// Task 5 //////////////
function divideArr(arr, num) {
  var result = [];
  while (arr.length) {
    result.push(arr.splice(0, num))
  }
  
  return result;
}

///// Test //////
divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
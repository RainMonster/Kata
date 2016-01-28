function nextId(ids){
  output = [];
  function smallerThan(elem, ind, arr) {
    if (arr[ind -1] + 1 !== elem) {
      output.push(elem)
    };
  }
  ids.forEach(smallerThan);
  if (output.length > 1) {
	  output = output.sort();
	  return output[1] - 1;
  } else {
  	return parseInt(ids.slice(-1)) + 1;
  }
}
console.log(nextId([0,1,2,3,4,5]))


// Give me Diamond - didn't finish this
// function diamond(n) {
// 	var outputArr = [];
// 	if (n % 2 == 0 || n != Math.abs(n)) {
// 		return false;
// 	} else {
// 		var count = 1;
// 		for (var i=0;i<n;i++){
// 			var negativeSpace = (n-count)/2;
// 			var row = new Array(negativeSpace).join(" ") + new Array(count).join("*") + new Array(negativeSpace).join(" ");
// 			outputArr.push(row);
// 		}
// 	}
// 	console.log(outputArr.join("\n"));

// 	// return diam;
// }

// console.log(diamond(3))




// Take a Ten Minute Walk
// function isValidWalk(walk) {
// 	function stepCounter(x) {
// 		obj[x] += 1;
// 	}
// 	var obj = {'n': 0, 's': 0, 'e': 0, 'w': 0}
// 	if (walk.length == 10) {
// 		walk.forEach(stepCounter)
// 		return (obj['n'] == obj['s'] && obj['e'] == obj['w'])
// 	} else {
// 		return false;
// 	}
// }

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','n','n','w','s','s','w','w']));




// Title Case
// function titleCase(title, minorWords) {
// 	var titleArray = title.toLowerCase().split(" ");
// 	var output = [];

// 	function minorWordsFilter(str) {
// 		if (minorWords) {
// 			var minorWordsArray = minorWords.toLowerCase().split(" ");
// 			return minorWordsArray.indexOf(str) == -1;
// 		} else {
// 			return true;
// 		}
// 	}

// 	function capitalLetter(match) {
// 		return match.toUpperCase();
// 	}

// 	var re = /^[a-z]/;
// 	output.push(titleArray[0].replace(re, capitalLetter))

// 	for (var i=1;i<titleArray.length;i++) {
// 		var tempStr = titleArray[i];
// 		if (minorWordsFilter(tempStr)) {
// 			tempStr = tempStr.replace(re, capitalLetter)
// 			output.push(tempStr);
// 		} else {
// 			output.push(tempStr);
// 		}
// 	}
// 	return output.join(" ");
// }

// console.log(titleCase("a clash of KINGS", 'a an the of'));
// console.log(titleCase("anything everything"));



// Scramblies -- did not solve
// function scramble(str1, str2) {
// 	var willWork = true;
// 	var count = 0;
// 	while (count < str1.length) {
// 		var toRemove = str1.indexOf(str2[count]);
// 		toRemove !== -1 ? str2 = str2.replace(str2[count], '') : willWork = false;
// 		count++;
// 	}
// 	return !(str2.length > 0);


// 	var arr2 = str2.split('');
// 	var compareStr = '';
// 	var containsChar = function(elem, index, array) {
// 		if (str1.indexOf(elem) !== -1) {
// 			compareStr += str1.indexOf(elem);
// 		} else {
// 			return true;
// 		}
// 	}
// 	return !arr2.some(containsChar);





	// str1 = str1.split('').sort().join('');
	// str2 = str2.split('').sort().join('');
	// console.log("str1: " + str1);
	// console.log("str2: " + str2);
	// return str1.match(str2) ? true : false;
// }

// console.log(scramble('rkqodlw','world'));
// console.log(scramble('rkqodlw','worldz'));
// console.log(scramble('cedewaraaossoqqyt','codewars'));

// Snail
// var snail = function(array) {
// 	// [0], all. [all], most. [most], all. all, [0].
// 	row = array.length;
// 	col = array[0].length;
// 	var total = row * col;
// 	// include check for row and column not being equal length;
// 	var innerBound = 0;
// 	var outerBound = row;
// 	var output = [];

// 	while (output.length < total) {
// 		for (var i=innerBound;i<outerBound;i++) {
// 			output.push(array[innerBound][i]);
// 		}
// 		for (var i=innerBound+1;i<outerBound;i++){
// 			output.push(array[i][outerBound-1]);
// 		}
// 		for (var i=outerBound-2;i>=innerBound;i--){
// 			output.push(array[outerBound-1][i]);
// 		}
// 		for (var i=outerBound-2;i>innerBound;i--){
// 			output.push(array[i][innerBound]);
// 		}
// 		// console.log(output);
// 		innerBound += 1;
// 		outerBound -=1;
// 	}
// 	return output;


// };

// console.log(snail([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
// console.log(snail([[1,2,3],[4,5,6],[7,8,9]]))

// [1,2,3,4]
// [5,6,7,8]
// [9,10,11,12]
// [13,14,15,16]

// require('buffer');

// String.prototype.toBase64 = function() {
// 	console.log(this);
// 	return new Buffer(this.toString()).toString('base64');
// }

// console.log("943019606".toBase64());
// console.log(new Buffer("Hello").toString('base64'))
// Singleton Pattern
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1


// var Singleton = function() {
// 	if (typeof Singleton.instance === 'object') {
// 		return Singleton.instance;
// 	}
// 	Singleton.instance = this;
// });

//all, none & any

// function isGreaterThanZero (num) {
//   return num > 0;
// }

// function isLessThanZero (num) {
//   return num < 0;
// }

// Array.prototype.all = function(p) {
//   return this.filter(p).length == this.length;
// }

// Array.prototype.none = function(p) {
// 	return this.filter(p).length == 0;
// }

// Array.prototype.any = function(p) {
// 	return this.filter(p).length >= 1;
// }

// console.log("**** all ****")
// console.log([11,2,3].all(isGreaterThanZero))
// console.log("**** none ****")
// console.log([-1,-2,-3].none(isGreaterThanZero))
// console.log("**** any ****")
// console.log([-1,2,3].any(isGreaterThanZero))

// other users
// function zipvalidate(postcode){
//   return /^[12346]\d{5}$/.test(postcode)
// }//z.
// var zipvalidate = RegExp.prototype.test.bind(/^[12346]\d{5}$/);

// function zipvalidate(postcode){
// 	// cannot start with 0,5,7,8 or 9
// 	var valid = /[1|2|3|4|6]\d{5}$/;
	// return !postcode.match(valid) || postcode.length > 6 ? false : true;
// }

// console.log(zipvalidate("043892"));
// console.log(zipvalidate("0000456789"));

// Multiplication Tables

// function multiplicationTable(row,col) {
// 	var matrixArr = [];
// 	for(var i=0;i<row;i++){
// 		matrixArr[i] = [];
// 		for(var j=0;j<col;j++){
// 			matrixArr[i][j] = (j+1) * (i+1);
// 		}
// 	}
// 	return matrixArr;
// }

// console.log(multiplicationTable(3,3));
// ("***");
// console.log(multiplicationTable(3,4));




// Are they the "same"?
// a = [ 121, 144, 19, 161, 19, 144, 19, 11 ]
// b = [ 121, 14641, 20736, 361, 25921, 361, 20736, 361 ]
// function comp(array1, array2) {
//   var result;
//   if (array1 && array2) {
//   	result = array2.every(function(x) {
//   		return array1.indexOf(Math.sqrt(x)) >= 0;
//   	})
//   } else {
//   	result = false;
//   }
//   return result;

// }

// console.log(comp(a,b));
// console.log(comp(c,d));

// Chain me - generic function chainer

// function add(num) {
// 	return num + 10;
// }

// function mult(num) {
// 	return num * 30;
// }

// // my code
// function chain(input, fs) {
// 	fs.forEach(function(x) {
// 		input = x(input);
// 	});
// 	return input;
// }

// console.log(chain(2, [add,mult]));
// // other users
// function chain(v, fns) {
//   return fns.reduce(function(v, fn) { return fn(v) }, v);
// }


// Categorize New Member - Croquet club

// Senior: at least 55 years old, handicap greater than 7 (range of -2 to +26, better is lower)

// // from other users
// function openOrSenior(data) {
// 	return data.map(function(x){
// 		return x[0] >= 55 && x[1] > 7 ? "Senior" : 'Open';
// 	});
// }

// //my code
// function openOrSenior(data){
// 	for (var i=0;i<data.length;i++){
// 		if (data[i][0] >= 55 && data[i][1] > 7) {
// 			data[i] = "Senior";
// 		} else {
// 			data[i] = "Open"
// 		}
// 	}
// 	return data;
// }

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))



// // Word a9n abbreivation
// function abbreviate(string){
// 	var obj = {};
// 	var strArr = string.match(/[a-z]+/gi)
// 	for (var i=0;i<strArr.length;i++){
// 		if (strArr[i].length > 3) {
// 			newStr = strArr[i].charAt(0) + (strArr[i].slice(1,-1).length) + strArr[i].slice(-1);
// 			string = string.replace(strArr[i], newStr);
// 			console.log(string);
// 			// obj[strArr[i]] = (strArr[i].charAt(0) + (strArr[i].slice(1,-1).length) + strArr[i].slice(-1))
// 		}
// 	}
// 	return string;
// 	// string.replace()

// }


// function ugh(string) {
// 	stringArr = string.split("-");
// 	for (var i=0;i<stringArr.length;i++){
// 		if (stringArr[i].length > 6) {
// 			newStr = stringArr[i].charAt(0) + (stringArr[i].slice(1,-1).length) + stringArr[i].slice(-1);
// 			stringArr[i] = newStr;
// 		}
// 	}
// 	return stringArr.join("-");
// }

// console.log(abbreviate("You need, need not want, to complete this code-wars mission"));

// function within a function
// function always (n) {
// 	return function() {return n};
// }
// var three = always(3);
// console.log(three());


// CHAR_TO_MORSE = { '0': '-----',
// '1': '.----',
// '2': '..---',
// '3': '...--',
// '4': '....-',
// '5': '.....',
// '6': '-....',
// '7': '--...',
// '8': '---..',
// '9': '----.',
// a: '.-',
// h: '....',
// o: '---',
// u: '..-',
// b: '-...',
// i: '..',
// p: '.--.',
// v: '...-',
// c: '-.-.',
// j: '.---',
// q: '--.-',
// w: '.--',
// d: '-..',
// k: '-.-',
// r: '.-.',
// x: '-..-',
// e: '.',
// l: '.-..',
// s: '...',
// y: '-.--',
// f: '..-.',
// m: '--',
// t: '-',
// z: '--..',
// g: '--.',
// n: '-.',
// A: '.-',
// H: '....',
// O: '---',
// U: '..-',
// B: '-...',
// I: '..',
// P: '.--.',
// V: '...-',
// C: '-.-.',
// J: '.---',
// Q: '--.-',
// W: '.--',
// D: '-..',
// K: '-.-',
// R: '.-.',
// X: '-..-',
// E: '.',
// L: '.-..',
// S: '...',
// Y: '-.--',
// F: '..-.',
// M: '--',
// T: '-',
// Z: '--..',
// G: '--.',
// N: '-.' }

// function encryption(message) {
//   var outputArr = [];
//   var messageArr = message.split(" ");
//   for (var i = 0; i < messageArr.length; i++) {
//   	outputArr[i] = [];
//   	for (var j = 0; j < messageArr[i].length; j++) {
//     	if (CHAR_TO_MORSE[messageArr[i][j]]) { outputArr[i].push(CHAR_TO_MORSE[messageArr[i][j]]) }
// 	}
//     // outputArr[i] = outputArr[i].join().replace(/,/g, " ");
//     outputArr[i] = outputArr[i].join(" ");
//     console.log(outputArr[i])
//   }
//   return outputArr.join("  ");
// }

// console.log(encryption("HELLO WORLD"));

// // Reverse recursive
// function reverse(str) {
// 	var revStr = '';
// 	revStr = str.slice(-1);
// 	if (str.length > 1) {
// 		str = str.slice(0,-1);
// 		revStr += reverse(str);
// 	}
// 	return revStr;
// }
// console.log(reverse("Hello"));


// // Code from other users
// function reverse(str) {
//   return str.length > 1 ? str.slice(-1) + reverse(str.slice(0,-1)) : str;
// }


// Sorting dictionaries

// my solution
// function sortDict(dict) {
// 	var arr = [];
// 	for (p in dict) {
//     p = parseInt(p) || p;
// 		arr.push([p,dict[p]]);
// 	};
// 	return arr.sort(function(a, b) {
// 		return b[1] - a[1];
// 	});
// }

// Code from other users
// function sortDict(dict) {
// 	return Object.keys(dict)
// 		.map(function(v){ return [+v || v, dict[v]]})
// 		.sort(function(a,b){ return a[1]<b[1]});
// }

// console.log(sortDict({1:2,2:4,3:6}))

// De-vowel troll comments

// function disemvowel(str) {
//   var vowels = /a|e|i|o|u/gi
//   str.replace(vowels, '')
//   return str;
// }

// console.log(disemvowel("This website"));


// sort words in sentence by integer in word

// function order(words) {
// 	if (words.length == 0) {
// 		return words;
// 	} else {
// 		var sortedArr = [];
// 		var arr = words.split(" ");
// 		for (var i = 0; i<arr.length; i++) {
// 			var num = arr[i].search(/[0-9]/);
// 			var placement = parseInt(arr[i][num]);
// 			sortedArr[placement - 1] = arr[i];
// 		}
// 		return sortedArr.join(" ");
// 	}
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order(""));
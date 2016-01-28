// length of compare-string
// destroy matched characters
// length - output == unscrambled?

// function scramble(str1, str2) {
// 	var inputLength = str1.length;
// 	var unscrambledLength = str2.length;
// 	if (unscrambledLength > inputLength) {
// 		return false;
// 	} else {
// 		for (var i=0;i<unscrambledLength;i++){
// 			if (str1.match(str2[i])) {
// 				str1 = str1.replace(str2[i], '');
// 			}
// 		}
// 	}
// 	console.log(str2);
// 	return (inputLength - str1.length) == unscrambledLength;
// }

function scramble(str1, str2) {
	var anyMatch = function(str1, str2, count) {
		return str1.indexOf(str2[count]) == -1;
	}
	count = 0;

	anyMatch(str1, str2, count)
}

console.log(scramble('rkqodlw','world'));
console.log(scramble('rkqodlw','worldz'));
console.log(scramble('cedewaraaossoqqyt','codewars'));
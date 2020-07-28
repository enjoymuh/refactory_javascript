/* 
 * Returns the result of having each alphabetic letter of the given text string shifted forward
 * by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
 * Examples:
 * - caesarShift("abz",  0) = "abz".
 * - caesarShift("abz",  1) = "bca".
 * - caesarShift("abz", 25) = "zay".
 * - caesarShift("THe 123 !@#$", 13) = "GUr 123 !@#$".
 */
function caesarShift(text, shift) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
		else if (95 <= c && c <= 120) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
		else                          result += text.charAt(i);  // Copy
	}
	return result;
}

console.log(caesarShift("I love JavaScript!", 100));
console.log(caesarShift("I love JavaScript!", -100));
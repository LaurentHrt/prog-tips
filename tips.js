// Regex //
c.match(/^[A-Z]/)
c.match(/^[A-Za-z]/)
c.match(/^[A-Za-z1-9]/)

// Type conversion //
+x 		// => To number
x-0 	// => To number
x+'' 	// => To string
!!x		// => To boolean (single ! to inverse)
const nums = readline().split(' ').map(Number);

// Base conversion //
n.toString(2) 	    // => n to Binary String
n.toString(16) 	    // => n to Hex String
parseInt(i, 16)     // => Hex i to Integer

// Format numbers //
(1234567896).toLocaleString('en')                   // => "1,234,567,896"
parseFloat('1234567896').toLocaleString('en')       // => "1,234,567,896"
Math.trunc(13.37)                                   // => 13 (truncate)
(13.9).toFixed(0)                                   // => 14 (arrondire)

// Miltiple replace
console.log(readline().replace(/o|l|z|e|a|s|g|t|b|q/gi, (m) => 'OLZEASGTBQ'.indexOf(m.toUpperCase())))

// Output
console.log('%s is %d years old.', 'John', 29)
print(seq.length ? seq.join(' ') : 'None');

// Somme des digits d'un nombre
(25).toString().split('').forEach((e) => (s += parseInt(e)))    // s=7
(25+'').split('').forEach((e) => (s += parseInt(e)))            // s=7

// ASCII to Char
String.fromCharCode(65)     // => A
"A".charCodeAt(0)           // => 65

// Loops
i = 25; while (i--) {}

// Arrays
let uniqueFruits2 = […new Set(fruits)];     // Remove duplicates
a.filter((c,i)=>i==s.lastIndexOf(c))        // Remove duplicates keeping the last occurence
var sum = nums.reduce((x, y) => x + y);     // Somme
var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item)); // Intersection of 2 arrays

// Size tips 
s.split('') => s.split``

// Strings 
/**
 * ! replaceAll ne fonctionne pas sur codingame
 */
MESSAGE.replace(/v/g, '') // Remplace tous les 'v' par ''

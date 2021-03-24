// Type conversion //
+x 		// => To number
x-0 	// => To number
x+'' 	// => To string
!!x		// => To boolean (single ! to inverse)
const nums = readline().split(' ').map(Number);

// Miltiple replace
s.replace(/o|l|z|e|a|s|g|t|b|q/gi, (m) => 'OLZEASGTBQ'.indexOf(m.toUpperCase()))

// Output
console.log('%s is %d years old.', 'John', 29)
print(seq.length ? seq.join(' ') : 'None');

// Somme des digits d'un nombre
(25).toString().split('').forEach((e) => (s += parseInt(e)))    // s=7
(25+'').split('').forEach((e) => (s += parseInt(e)))            // s=7

// ASCII to Char


// Loops
i = 25; while (i--) {}

// Arrays
let uniqueFruits2 = […new Set(fruits)];     // Remove duplicates
a.filter((c,i)=>i==s.lastIndexOf(c))        // Remove duplicates keeping the last occurence
var sum = nums.reduce((x, y) => x + y);     // Somme
var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item)); // Intersection of 2 arrays

// Size tips 
s.split('') => s.split``


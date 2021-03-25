// * ------------------------------------------
// * ---------------- Type --------------------
// * ------------------------------------------
// Number
(1234567896).toLocaleString('en')       // => "1,234,567,896"
Math.trunc(13.37)                       // => 13 (truncate)
(13.9).toFixed(0)                       // => 14 (arrondire)

// String
s = 'Hello world'
s.length                    // => 11
s.slice(1, 3)               // => "ell"
s.slice(-3)                 // => "rld"
s.split(' ')                // => ["Hello", "World"]
s.indexOf('l')              // => 3
s.indexOf('l', 4)           // => 9
s.indexOf('zz')             // => -1
s.lastIndexOf('l')          // => 9
s.startsWith('Hel')         // => true
s.endsWith('s')             // => false
s.includes('w')             // => true
s.replace('wor', 'oo')      // "Hello oold"
s.replace(/l/g, 'z')        // "Hezzo worzd" (replaceAll)
s.replaceAll('l', 'z')      // "Hezzo worzd" !Not working in Codingame
s.toLowerCase()
s.toUpperCase()
s.charCodeAt(3)             // => 103 (ASCII for 'l')
s.codePointAt(3)            // => 103 (ASCII for 'l') (ES6 works for codepoints > 16 bits)
String.fromCharCode(65)     // => A
s.padStart(3)               // => '   Hello world'
s.padEnd(3)                 // => 'Hello world   '
s.padStart(3, '*')          // => '***Hello world'
s.padEnd(3, '*')            // => 'Hello world***'
s.trim()
s.trimStart()
s.trimEnd()
s.repeat(3)                 // => 'Hello worldHello worldHello world'

// Regex
c.match(/^[A-Z]/)
c.match(/^[A-Za-z]/)
c.match(/^[A-Za-z1-9]/)

// Array
a = [100, 200, 300, 50]
Math.max(...a)                              // => 300
a.indexOf(Math.max(...a))                   // => 2
[1, [2]].flat()                             // => [1, 2]
[1, [2, [3]]].flat(2)                       // => [1, 2]
let uniqueFruits2 = […new Set(fruits)];     // Remove duplicates
var sum = nums.reduce((x, y) => x + y);     // Sum
a.filter((c,i)=>i==s.lastIndexOf(c))        // Remove duplicates keeping the last occurence
var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item)); // Intersection of 2 arrays


// * ------------------------------------------
// * ------------ Conversion ------------------
// * ------------------------------------------
// Type conversion
x           // => To number
x - 0       // => To number
x + ''      // => To string
!!x         // => To boolean (single ! to inverse)
const nums = readline().split(' ').map(Number)

// Base conversion
n.toString(2)       // => n to Binary String
n.toString(16)      // => n to Hex String
parseInt(h, 16)     // => Hex h to Integer
parseInt(b, 2)      // => Binary h to Integer



// * ------------------------------------------
// * --------------- Tips ---------------------
// * ------------------------------------------
// Miltiple replace
s.replace(/o|l|z|e|a|s|g|t|b|q/gi, (m) => 'OLZEASGTBQ'.indexOf(m.toUpperCase()))

// Output
console.log('%s is %d years old.', 'John', 29)
print(seq.length ? seq.join(' ') : 'None');

// Somme des digits d'un nombre
(25).toString().split('').forEach((e) => (s += parseInt(e)))    // s=7
(25+'').split('').forEach((e) => (s += parseInt(e)))            // s=7

// Size tips 
i = 25; while (i--) {}
s.split('') => s.split``
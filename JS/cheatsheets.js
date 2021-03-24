// Array

// Numbers
(1234567896).toLocaleString('en')   // => "1,234,567,896"
Math.trunc(13.37)                   // => 13 (truncate)
(13.9).toFixed(0)                   // => 14 (arrondire)

// Base conversion
n.toString(2) 	    // => n to Binary String
n.toString(16) 	    // => n to Hex String
parseInt(h, 16)     // => Hex h to Integer

// String
s = 'Hello world'
s.length        // => 11
s.slice(1, 3)   // => "ell"
s.slice(-3)     // => "rld"
s.split(' ')    // => ["Hello", "World"]

s.indexOf('l')      // => 3
s.indexOf('l', 4)   // => 9
s.indexOf('zz')     // => -1
s.lastIndexOf('l')  // => 9

s.startsWith('Hel')     // => true
s.endsWith('s')         // => false
s.includes('w')         // => true

s.replace('wor', 'oo')  // "Hello oold"
s.replace(/l/g, 'z')    // "Hezzo worzd" (replaceAll)
s.replaceAll('l', 'z')  // "Hezzo worzd" !Not working in Codingame
s.toLowerCase()
s.toUpperCase()

s.charCodeAt(3)     // => 103 (ASCII for 'l')
s.codePointAt(3)    // => 103 (ASCII for 'l') (ES6 works for codepoints > 16 bits)
String.fromCharCode(65)     // => A

s.padStart(3)           // => '   Hello world'
s.padEnd(3)             // => 'Hello world   '
s.padStart(3, '*')      // => '***Hello world'
s.padEnd(3, '*')        // => 'Hello world***'

s.trim()
s.trimStart()
s.trimEnd()

s.repeat(3)     // => 'Hello worldHello worldHello world'

// Regex
c.match(/^[A-Z]/)
c.match(/^[A-Za-z]/)
c.match(/^[A-Za-z1-9]/)
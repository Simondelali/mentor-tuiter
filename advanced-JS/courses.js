'use strict';

const courseNames = `Web Applications I, Computer Architectures,
Data Science and Database Technology,
Computer network technologies and services, Information systems security,
Software engineering, System and device programming`;
// If you use `` instead of '', you can have multi-line strings, with newlines: then, you need to handle newlines with, e.g., replace() -- see below
//console.log(courseNames)
// join multi-line string
const modif = courseNames.replace(/\n/g, ' ');
//console.log(modif)
// // // create the courses array
const courses = modif.split(',');
//console.log(courses)
// // clean whitespace around commas
for (let i = 0; i < courses.length; i++) {
   //console.log(courses[i])
   courses[i] = courses[i].trim();
   //console.log(courses[i])
}
//console.log(courses)
// // ALTERNATIVE
// /*
// for(let [i, c]  of courses.entries())
//   courses[i] = c.trim() ;
// */

// create acronyms
const acronyms = [];
for (const c of courses) {
   // each word in an array position
   const words = c.split(' ');
   let acronym = '';
   // make the first letter of each word uppercase and store it
   for (let w of words) {
      acronym += w[0].toUpperCase();

   }
   // store the acronym in the array
   acronyms.push(acronym);
}

// print each acronym + course name
//const output = [];
for (let i = 0; i < courses.length; i++) {
   console.log(`${acronyms[i]} - ${courses[i]}`);
}


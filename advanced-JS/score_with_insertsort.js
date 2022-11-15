"use strict";

function insertsort(bag) {
    for (const index in bag) {
        let position = index;
        let keep = 0;
        while (position > 0 && bag[position] < bag[position - 1]) {
            keep = bag[position];
            bag[position] = bag[position - 1];
            bag[position - 1] = keep;
            position -= 1;
        }
    }
}


const score = [25, 30, 18, 27, 28, 27, 30, 26];
const newScore = [...score];
insertsort(newScore);
newScore.shift();
newScore.shift();

let averageScore = 0;
for (const value of newScore) {
    averageScore += value;
}

averageScore /= newScore.length;
averageScore = Math.round(averageScore);

newScore.push(averageScore);
newScore.push(averageScore);

console.log(score);
console.log(newScore);





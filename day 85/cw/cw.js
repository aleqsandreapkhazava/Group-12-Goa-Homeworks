// Task 6: Count Vowels in a String
// Write a program that counts how many vowels (a, e, i, o, u) are in a given string (e.g., "programming") using a for loop. 

let word= ("proggraming")
let MN= "aeiouAEIOU"

let itrr= 0

for(let count=0; count< word.length; count++){
    if(MN.includes(word)){
        itrr++
    }
}

alert
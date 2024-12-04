function SelectName(names){

let Newlist =Math.floor(Math.random() * names.length)     

alert(Newlist + ' მაყუთი მოიტა')
let names = ['nika', 'saba', 'nikaa', 'loko', 'moko']
return names
}




let number = window.prompt("enter your number")

if(number%3==0 && number%5!=0){
    alert("Fizz")
}else if(number%5==0){
    alert("Buzz")
}else if(number%3==0 && number%5==0){
    alert("FIZZBUZZ")
}


1) საკლასო
let Sum = 0;

for (let number = 1; number <= 100; number++) {
    Sum + number; 
}


alert("ჯამი:", Sum);


2) საკლასო
let num = prompt("enter number:");



for (let i = 1; i <= 10; i++) {
    let res = num * i;
    alert(num + " x " + i + " = " + res)}



3)საკლასო



let arr = [3, 6, 9, 12, 15, 18, 21, 24];


let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {  
        evenCount++;
    } else {  
        oddCount++;
    }
}

alert("Even numbers count:", even);
alert("Odd numbers count:", odd);

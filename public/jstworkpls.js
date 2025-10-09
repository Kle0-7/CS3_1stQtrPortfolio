for  (let i = 2; i <=20; i = i+2){
    console.log(i)
}

i = 1;
while (i<=3){
    console.log(i);
    i++;
}

i = 1
do {
    console.log(i)
    i++;
}while (i<=3);

fav_fruits = ["mango", "banana", "apple"];
fav_fruits.push("strawberry");
var popped = fav_fruits.pop()
var shifted = fav_fruits.shift 
fav_fruits.unshift("kiwi")

console.log(popped)

for (let i = 0; i<fav_fruits.length; i ++){
    console.log(fav_fruits[i])
}

for( fruit of fav_fruits){
    console.log(fruit)
}

fav_fruits.forEach(print_fruit)

function print_fruit(fruit){
    console.log(fruit)
}

grades = [90,88,99,100,98]

sum = 0;
for(let i =0;i<grades.length; i++){
    sum += grades[i]
    
}
console.log(sum/5)

console.log("choose your pokemon !! ")





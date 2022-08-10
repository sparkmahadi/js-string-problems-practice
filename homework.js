// Homework: 1
// write a function that will take 3 numbers will return the max number

/* function maxFinder(a, b, c){
    let maxNumber = Math.max(a,b,c);
    console.log(maxNumber);
}

maxFinder(1,2,3); */



// Homework: 2
// Write a function that will take 3 parameters and will return the min number

/* function maxFinder(a, b, c){
    let maxNumber = Math.min(a,b,c);
    console.log(maxNumber);
}

maxFinder(1,2,3);  */


// Homework: Write a function to get the lowest number in an array
function minInArray(numbers){
        let smallest = numbers[0];

    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element<smallest){
            smallest = element;
        }
    }
    return smallest;
}

const heights = [167, 190, 120, 165, 137, 265];
const smallest = minInArray(heights);
console.log('smallest person is: ', smallest);
const dogString = "Hello Max, my name is Dog, and I have purple eyes!";
const dogNames = ["Max","HAS","PuRple","dog"];

function findWords() {
    let hadMatches = false;
    for (const dogName of dogNames) {
        if (dogString.toLowerCase().includes(dogName.toLowerCase())) {
            console.log(`Matched ${dogName}`);
            hadMatches = true;
        }
    }
    if (!hadMatches) {
        console.log(`No Matches`);
    }
}
findWords();


function replaceEvens(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
const newArr = replaceEvens(arr);
console.log(newArr)
b = [1,2,3]

let emptyResult = [].test()

let filledResult = b.test()

if (emptyResult === "Empty list"){
    if (filledResult === 3){
        console.log("Correct! Well done");
    }else{
        console.log("Empty result was correct, but the filled result was wrong.");
    }
}else{
    if (filledResult === 3) {
        console.log("Empty result was wrong, but filled result was coorect!");
    }else{
        console.log("Both test cases failed.");
    }
}
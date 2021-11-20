//First task
let str = "*";
while (str.length <= 7) {
    console.log(str);
    str += "*";
};


//Second Task
for (let a = 0; a < 101; a++) {
    if (a % 15 === 0) {
        console.log(`${a} - FizzBuzz`);
    } else if (a % 3 === 0) {
        console.log(`${a} - Fizz`);
    } else if (a % 5 === 0) {
        console.log(`${a} - Buzz`);
    } else { console.log(`${a} - Nothing`) };
};


//Third task

let size = +prompt("Enter a number: ");
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);
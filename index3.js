let fun = (a, b) => {
    if (a > b) {
        console.log(`${a} > ${b}`);
    } else if (a == b) {
        console.log(`${a} == ${b}`);
    } else {
        console.log(`${b} > ${a}`);
    };
};
fun();

let twoMass = (arr1, arr2) => {
    console.log((arr1.length > arr2.length) ? ("arr1 > arr2") : (arr1.length == arr2.length) ? ("arr1 == arr2") : ("arr2 > arr1"));
};
twoMass([], []);

let strLength = (str) => {
    let count = 0;
    for (let letter in str) {
        count += 1;
    }
    return count;
};
strLength("Manchester City");
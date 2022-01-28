let empty = [];

for (let i = 0; i < 101; i++) {
    empty.push(i)

}

function newArray() {
    let num = empty.filter(divFive);

    return num;
}

function divFive(x) {
    return x % 5 === 0;
}

function add(array) {
    let add = array.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return add;
}

console.log(newArray());
console.log(add(newArray()));
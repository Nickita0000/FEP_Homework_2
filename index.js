const operator = prompt("Enter operator +, -, *, /");
// function num(num_a = `A`){
//     return num_a = prompt(`Enter operand ${num_a}`);
//     console.log(num_a);
// }                                        //? I can't assign a new value to a var. Constantly remains letter
// num(num_a = `A`);
// console.log(num_a);
// num(num_b = `B`);
// console.log(num_b);
const num_a = prompt("Enter operand A");
const num_b = prompt("Enter operand B");
switch (operator){
    case   `+` :
        sum = Number(num_a) + Number(num_b);
        break;
    case   `-` :
        sum = Number(num_a) - Number(num_b);
        break;
    case   `*` :
        sum = Number(num_a) * Number(num_b);
        break;
    case   `/` :
        sum = Number(num_a) / Number(num_b);
        break;
}
alert(`${num_a} ${operator} ${num_b} = ${sum}`);
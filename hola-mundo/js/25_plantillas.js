var name = prompt("What is your name");
var age = prompt("What is your age");

var text = `
    <h1>Hello, how are you?</h1>
    <h3>My name is: ${name}</h3>
    <h3>My name age: ${age}</h3>
`;

document.write(text);
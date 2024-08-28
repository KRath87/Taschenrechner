import "./style.css";
//Taschenrechner mit + - * /
let calculation = 0;
let number = 0;
let text = "";
let newNumber = 0;
let result = 0;
let output = "";

const inOut = document.querySelectorAll("#inOut div");
const opperators = document.querySelectorAll("#calculate .operators");
const values = document.querySelectorAll("#calculate .values");

console.log(inOut);
console.log(inOut[0].id);
console.log(inOut[0].tagName);
console.log(opperators);
console.log(opperators[0].id);
console.log(values);
console.log(values[0].id);
console.log(values[0].tagName);

for (let i = 0; i < 10; i++) {
	const numValue = values[i].id;
	const value = parseInt(numValue);
	const opperator = opperators[i].id;

	(<HTMLDivElement>document.getElementById(numValue)).addEventListener(
		"click",
		() => write(value)
	);
	(<HTMLDivElement>document.getElementById(opperator)).addEventListener(
		"click",
		() => calculate(opperator)
	);
}

function write(received: number) {
	text = text + received.toString();
	output = text;
	(<HTMLDivElement>document.getElementById("input")).innerHTML = output;

	// console.log(text);
}
function calculate(action: string) {
	if (action === "delete") {
		window.location.reload();
	}
	if (action === "addition") {
		newNumber = parseInt(text);

		calculation = number + newNumber;
		number = calculation;
		console.log(number);
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "+";
	}
	if (action === "subtraction") {
		if (number === 0) {
			number = parseInt(text);
		} else {
			newNumber = parseInt(text);

			calculation = number - newNumber;
			number = calculation;
			console.log(calculation);
			text = "";
			(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
		}
	}
	if (action === "division") {
		newNumber = parseInt(text);

		calculation = newNumber - number;
		number = calculation;
		console.log(calculation);
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "multiplication") {
		newNumber = parseInt(text);

		calculation = newNumber - number;
		number = calculation;
		console.log(calculation);
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "point") {
		newNumber = parseInt(text);

		calculation = newNumber - number;
		number = calculation;
		console.log(calculation);
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "negative") {
		newNumber = parseInt(text);

		calculation = newNumber - number;
		number = calculation;
		console.log(calculation);
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "result") {
		number = calculation;
		console.log(number);
		text = "";
	}
}

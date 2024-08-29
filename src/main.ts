import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let number = 0;
let index = 0;

let inputArray: string = [0];
let rechnung: number = [];
let arrayIndex = 0;

const inOut = document.querySelectorAll("#inOut div");
const opperators = document.querySelectorAll("#calculate .operators");
const values = document.querySelectorAll("#calculate .values");

console.log(inOut);

console.log(opperators);

console.log(values);

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
	inputArray[arrayIndex] = text;

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	if (action === "delete") {
		window.location.reload();
	}
	if (inputArray[arrayIndex] == !0) {
		arrayIndex++;
	}
	if (action === "addition") {
		arrayIndex++;
		inputArray[arrayIndex] = "+";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		arrayIndex++;
		inputArray[arrayIndex] = "-";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		arrayIndex++;
		inputArray[arrayIndex] = "/";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		arrayIndex++;
		inputArray[arrayIndex] = "*";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
	}

	if (action === "result") {
		arrayIndex++;
		console.log(inputArray);
		for (let c = 0; c < inputArray.length; c++) {
			if (inputArray.includes("*")) {
				multi = inputArray.indexOf("*");
				number = inputArray[multi - 1] * inputArray[multi + 1];
				index = multi - 1;
				inputArray.splice(index, 3, number);
			}
			if (inputArray.includes("/")) {
				divi = inputArray.indexOf("/");
				number = inputArray[divi - 1] / inputArray[divi + 1];
				index = divi - 1;
				inputArray.splice(index, 3, number);
			}
		}
		for (let b = 0; b < inputArray.length; b++) {
			if (typeof inputArray[b] === "number") {
				newNumber = parseInt(inputArray[b]);
			} else if (inputArray[b] === "+") {
				newNumber = parseInt(inputArray[b - 1]) + parseInt(inputArray[b + 1]);
				b++;
				inputArray[b] = newNumber;
			} else if (inputArray[b] === "*") {
				newNumber = parseInt(inputArray[b - 1]) * parseInt(inputArray[b + 1]);
				b++;
				inputArray[b] = newNumber;
			} else if (inputArray[b] === "-") {
				newNumber = parseInt(inputArray[b - 1]) - parseInt(inputArray[b + 1]);
				b++;
				inputArray[b] = newNumber;
			} else if (inputArray[b] === "/") {
				newNumber = parseInt(inputArray[b - 1]) / parseInt(inputArray[b + 1]);
				b++;
				inputArray[b] = newNumber;
			}
		}

		console.log(newNumber);
		text = "";

		inputArray.length = 0;
		console.log(inputArray);
		inputArray[0] = newNumber;
		console.log(inputArray[0]);
	}

	(<HTMLDivElement>document.getElementById("output")).innerHTML =
		newNumber.toString();
}

import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let number = 0;
let index = 0;

let arrZahlen: number[] = [];
let arrRechnung: string[] = [];

let indexZahlen = 0;
let indexRechnung = 0;

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

	arrZahlen[indexZahlen] = parseFloat(text);
	// console.log(arrInput);

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	(<HTMLDivElement>document.getElementById("input")).innerHTML =
		arrZahlen.join("") + "=";
	if (action === "delete") {
		window.location.reload();
	}

	if (arrZahlen[0] > 0 || arrZahlen[0] < 0) {
		(<HTMLDivElement>document.getElementById("input")).innerHTML =
			newNumber.toString();

		indexZahlen++;
	}
	if (action === "addition") {
		arrRechnung[indexRechnung] = "+";
		indexRechnung++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		arrRechnung[indexRechnung] = "-";
		indexRechnung++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		arrRechnung[indexRechnung] = "/";
		indexRechnung++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		arrRechnung[indexRechnung] = "*";
		indexRechnung++;

		text = "";

		(<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
	}

	if (action === "result") {
		indexZahlen++;

		console.log(arrRechnung);
		console.log(arrZahlen);
		for (let c = 0; c < arrZahlen.length; c++) {
			if (arrRechnung.includes("*")) {
				multi = arrRechnung.indexOf("*");
				number = arrZahlen[multi - 1] * arrZahlen[multi + 1];
				index = multi - 1;
				arrZahlen.splice(index, 3, number);
			}
			if (arrRechnung.includes("/")) {
				divi = arrRechnung.indexOf("/");
				number = arrZahlen[divi - 1] / arrZahlen[divi + 1];
				index = divi - 1;
				arrZahlen.splice(index, 3, number);
			}
		}
		for (let b = 0; b < arrZahlen.length; b++) {
			if (typeof arrInput[b] === "number") {
				newNumber = parseInt(arrInput[b]);
			} else if (arrInput[b] === "+") {
				newNumber = parseInt(arrInput[b - 1]) + parseInt(arrInput[b + 1]);
				b++;
				arrInput[b] = newNumber.toString();
			} else if (arrInput[b] === "*") {
				newNumber = parseInt(arrInput[b - 1]) * parseInt(arrInput[b + 1]);
				b++;
				arrInput[b] = newNumber.toString();
			} else if (arrInput[b] === "-") {
				newNumber = parseInt(arrInput[b - 1]) - parseInt(arrInput[b + 1]);
				b++;
				arrInput[b] = newNumber.toString();
			} else if (arrInput[b] === "/") {
				newNumber = parseInt(arrInput[b - 1]) / parseInt(arrInput[b + 1]);
				b++;
				arrInput[b] = newNumber.toString();
			}
		}

		console.log(newNumber);
		text = "";

		arrInput.length = 0;
		console.log(arrInput);
		arrInput[0] = newNumber.toString();
		console.log(arrInput[0]);
	}

	(<HTMLDivElement>document.getElementById("output")).innerHTML =
		newNumber.toString();
}

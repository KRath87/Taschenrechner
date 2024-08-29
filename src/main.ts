import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let number = 0;
let index = 0;

let arrInput: string[] = [];
let arrRechung: number[] = [];
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

	arrInput[arrayIndex] = text;
	// console.log(arrInput);

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	if (action === "delete") {
		window.location.reload();
	}
	if (arrInput[arrayIndex] == !0) {
		arrayIndex++;
	}
	if (action === "addition") {
		arrayIndex++;
		arrInput[arrayIndex] = "+";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		arrayIndex++;
		arrInput[arrayIndex] = "-";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		arrayIndex++;
		arrInput[arrayIndex] = "/";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		arrayIndex++;
		arrInput[arrayIndex] = "*";
		arrayIndex++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
	}

	if (action === "result") {
		arrayIndex++;
		console.log(arrInput);
		for (let c = 0; c < arrInput.length; c++) {
			if (arrInput.includes("*")) {
				multi = arrInput.indexOf("*");
				number = arrInput[multi - 1] * arrInput[multi + 1];
				index = multi - 1;
				arrInput.splice(index, 3, number);
			}
			if (arrInput.includes("/")) {
				divi = arrInput.indexOf("/");
				number = arrInput[divi - 1] / arrInput[divi + 1];
				index = divi - 1;
				arrInput.splice(index, 3, number);
			}
		}
		for (let b = 0; b < arrInput.length; b++) {
			if (typeof arrInput[b] === "number") {
				newNumber = parseInt(arrInput[b]);
			} else if (arrInput[b] === "+") {
				newNumber = parseInt(arrInput[b - 1]) + parseInt(arrInput[b + 1]);
				b++;
				arrInput[b] = newNumber.toString();
			} else if (arrInput[b] === "*") {
				newNumber = arrInput[b - 1] * arrInput[b + 1];
				b++;
				arrInput[b] = newNumber;
			} else if (arrInput[b] === "-") {
				newNumber = arrInput[b - 1] - arrInput[b + 1];
				b++;
				arrInput[b] = newNumber;
			} else if (arrInput[b] === "/") {
				newNumber = arrInput[b - 1] / arrInput[b + 1];
				b++;
				arrInput[b] = newNumber;
			}
		}

		console.log(newNumber);
		text = "";

		arrInput.length = 0;
		console.log(arrInput);
		arrInput[0] = newNumber;
		console.log(arrInput[0]);
	}

	(<HTMLDivElement>document.getElementById("output")).innerHTML =
		newNumber.toString();
}

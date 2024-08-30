import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;

let arrZahlen: number[] = [];
let arrRechnung: string[] = [];

let indexZahlen = 0;
let indexRechnung = 0;

const opperators = document.querySelectorAll("#calculate .operators");
const values = document.querySelectorAll("#calculate .values");

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
		// { once: true }
	);
}

function write(received: number) {
	text = text + received.toString();

	arrZahlen[indexZahlen] = parseFloat(text);
	// console.log(arrInput);

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	if (action === "delete") {
		window.location.reload();
	}
	if (indexZahlen === 0) {
		arrZahlen[0] = 0;
		indexZahlen++;
	}

	if (arrZahlen[0] > 0 || arrZahlen[0] < 0) {
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

		console.log("arrRechung=" + arrRechnung);
		console.log("arrZahlen=" + arrZahlen);

		for (let c = 0; c < arrZahlen.length; c++) {
			if (arrRechnung.includes("*")) {
				multi = arrRechnung.indexOf("*");

				newNumber = arrZahlen[multi] * arrZahlen[multi + 1];

				arrZahlen.splice(multi, 2, newNumber);
				arrRechnung.splice(multi, 1);
				console.log("arrzahlen nach multi=" + arrZahlen);
			}
			if (arrRechnung.includes("/")) {
				divi = arrRechnung.indexOf("/");
				newNumber = arrZahlen[divi] / arrZahlen[divi + 1];
				arrZahlen.splice(divi, 2, newNumber);
				arrRechnung.splice(divi, 1);
				console.log("arrzahlen nach divi=" + arrZahlen);
			}
		}
		for (let b = 0; b < arrZahlen.length; b++) {
			if (arrRechnung[b] === "+") {
				newNumber = arrZahlen[b] + arrZahlen[b + 1];
				arrZahlen[b + 1] = newNumber;

				console.log("arrZahlen nach addition =" + arrZahlen);
			}
			if (arrRechnung[b] === "-") {
				newNumber = arrZahlen[b] - arrZahlen[b + 1];
				arrZahlen[b + 1] = newNumber;

				console.log("arrZahlen nach substraction =" + arrZahlen);
			}
		}
		if (isNaN(newNumber)) {
			(<HTMLDivElement>document.getElementById("output")).innerHTML =
				"Eingabefehler";
		} else {
			(<HTMLDivElement>document.getElementById("output")).innerHTML =
				newNumber.toString();
		}

		text = "";
		console.log("newNumber= " + newNumber);
		arrRechnung = [];
		arrZahlen = [];
		indexZahlen = 0;
		indexRechnung = 0;

		multi = 0;
		divi = 0;
		arrZahlen[0] = newNumber;
	}
}

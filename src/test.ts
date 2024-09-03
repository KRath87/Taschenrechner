import "./style.css";

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let root = 0;
let result = "";

let arrZahlen: number[] = [];
let arrRechnung: string[] = [];
let arrErgebnis: string[] = [];

let indexZahlen = 0;
let indexRechnung = 0;
let indexErgebnis = 0;

const opperators = document.querySelectorAll("#calculate .operators");
const values = document.querySelectorAll("#calculate .values");

for (let i = 0; i < 10; i++) {
	const numValue = values[i].id;
	const value = numValue;
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

function write(received: string) {
	console.log("arrZahlen vor Texteingabe= " + arrZahlen);
	text = text + received;

	arrRechnung[indexRechnung] = text;

	arrErgebnis[indexErgebnis] = text;

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	if (action === "delete") {
		text = "";
		arrRechnung = [];
		arrZahlen = [];
		arrErgebnis = [];
		indexZahlen = 0;
		indexRechnung = 0;
		indexErgebnis = 0;

		multi = 0;
		divi = 0;
		root = 0;
		newNumber = 0;

		(<HTMLDivElement>document.getElementById("output")).innerHTML = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "0";
	} else if (arrZahlen[0] > 0 || arrZahlen[0] < 0) {
		indexZahlen++;
		indexErgebnis++;
	} else if (indexZahlen === 0) {
		arrZahlen[0] = 0;
		indexZahlen++;
		arrErgebnis[0] = "0";
		indexErgebnis++;
	}

	if (action === "root") {
		indexRechnung++;
		arrRechnung[indexRechnung] = "&#8730;";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "&#8730;";
		indexErgebnis++;
		(<HTMLDivElement>document.getElementById("input")).innerHTML =
			"&#8730;" + text;
		text = "";
	}
	if (action === "addition") {
		indexRechnung++;
		arrRechnung[indexRechnung] = "+";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "+";
		indexErgebnis++;
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		indexRechnung++;
		arrRechnung[indexRechnung] = "-";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "-";
		indexErgebnis++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		indexRechnung++;
		arrRechnung[indexRechnung] = "/";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "/";
		indexErgebnis++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		indexRechnung++;
		arrRechnung[indexRechnung] = "*";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "*";
		indexErgebnis++;

		text = "";

		(<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
	}

	if (action === "result") {
		console.log = eval(arrRechnung);

		if (isNaN(newNumber)) {
			(<HTMLDivElement>document.getElementById("output")).innerHTML =
				"Bitte Eingabe überprüfen";
			(<HTMLDivElement>document.getElementById("input")).innerHTML =
				arrErgebnis.join("") + "=";
		} else {
			(<HTMLDivElement>document.getElementById("output")).innerHTML =
				newNumber.toString();
			(<HTMLDivElement>document.getElementById("input")).innerHTML =
				arrErgebnis.join("") + "=";
		}

		text = "";
		console.log("newNumber= " + newNumber);
		arrRechnung = [];
		arrZahlen = [];
		indexZahlen = 0;
		indexRechnung = 0;

		multi = 0;
		divi = 0;
		root = 0;

		arrZahlen[0] = newNumber;
	}
}

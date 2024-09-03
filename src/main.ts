import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let root = 0;

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
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "Eingabe";
		console.log("delete");
	}

	if (arrZahlen[0] > 0 || arrZahlen[0] < 0) {
		indexZahlen++;
		indexErgebnis++;
	}

	if (indexZahlen === 0) {
		arrZahlen[0] = 0;
		indexZahlen++;
		arrErgebnis[0] = "0";
		indexErgebnis++;
	}

	if (action === "root") {
		arrRechnung[indexRechnung] = "&#8730;";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "&#8730;";
		indexErgebnis++;
		(<HTMLDivElement>document.getElementById("input")).innerHTML =
			"&#8730;" + text;
		text = "";
	}
	if (action === "addition") {
		arrRechnung[indexRechnung] = "+";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "+";
		indexErgebnis++;
		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		arrRechnung[indexRechnung] = "-";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "-";
		indexErgebnis++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		arrRechnung[indexRechnung] = "/";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "/";
		indexErgebnis++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		arrRechnung[indexRechnung] = "*";
		indexRechnung++;
		arrErgebnis[indexErgebnis] = "*";
		indexErgebnis++;

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
				// console.log("multi=" + multi);
				newNumber = arrZahlen[multi] * arrZahlen[multi + 1];
				// console.log("newNumber=" + newNumber);
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
			if (arrRechnung.includes("&#8730;")) {
				root = arrRechnung.indexOf("&#8730;");
				newNumber = Math.sqrt(arrZahlen[root]);
				arrZahlen[root] = newNumber;
				arrRechnung.splice(root, 1);
				console.log("arrzahlen nach divi=" + arrZahlen);
			}
		}
		for (let b = 0; b < arrZahlen.length; b++) {
			if (arrRechnung[b] === "+") {
				newNumber = arrZahlen[b] + arrZahlen[b + 1];
				arrZahlen[b + 1] = newNumber;
				console.log("arrZahlen nach addition= " + arrZahlen);
			}
			if (arrRechnung[b] === "-") {
				newNumber = arrZahlen[b] - arrZahlen[b + 1];
				arrZahlen[b + 1] = newNumber;
				console.log("arrZahlen nach substraction= " + arrZahlen);
			}
		}
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

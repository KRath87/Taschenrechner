import "./style.css";
//Taschenrechner mit + - * /

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let number = 0;
let index = 0;

let arr = [];
let a = 0;

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
	arr[a] = text;

	(<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

function calculate(action: string) {
	if (action === "delete") {
		window.location.reload();
	}
	if (arr[a] == !0) {
		a++;
	}
	if (action === "addition") {
		a++;
		arr[a] = "+";
		a++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
	}
	if (action === "subtraction") {
		a++;
		arr[a] = "-";
		a++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
	}
	if (action === "division") {
		a++;
		arr[a] = "/";
		a++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
	}
	if (action === "multiplication") {
		a++;
		arr[a] = "*";
		a++;

		text = "";
		(<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
	}

	if (action === "result") {
		a++;
		console.log(arr);
		for (let c = 0; c < arr.length; c++) {
			if (arr.includes("*")) {
				multi = arr.indexOf("*");
				number = arr[multi - 1] * arr[multi + 1];
				index = multi - 1;
				arr.splice(index, 3, number);
			}
			if (arr.includes("/")) {
				divi = arr.indexOf("/");
				number = arr[divi - 1] / arr[divi + 1];
				index = divi - 1;
				arr.splice(index, 3, number);
			}
		}
		for (let b = 0; b < arr.length; b++) {
			if (typeof arr[b] === "number") {
				newNumber = arr[b];
			} else if (arr[b] === "+") {
				newNumber = arr[b - 1] + arr[b + 1];
				b++;
				arr[b] = newNumber;
			} else if (arr[b] === "*") {
				newNumber = arr[b - 1] * arr[b + 1];
				b++;
				arr[b] = newNumber;
			} else if (arr[b] === "-") {
				newNumber = arr[b - 1] - arr[b + 1];
				b++;
				arr[b] = newNumber;
			} else if (arr[b] === "/") {
				newNumber = arr[b - 1] / arr[b + 1];
				b++;
				arr[b] = newNumber;
			}
		}

		console.log(newNumber);
		text = "";

		arr.length = 0;
		console.log(arr);
		arr[0] = newNumber;
		console.log(arr[0]);
	}

	(<HTMLDivElement>document.getElementById("output")).innerHTML =
		newNumber.toString();
}

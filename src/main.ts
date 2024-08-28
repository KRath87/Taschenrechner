import "./style.css";
//Taschenrechner mit + - * /
let calculation = 0;
const number: number[] = [];

const inOut = document.getElementById("inOut").querySelectorAll("div");
const opperators = document
	.getElementById("calculate")
	.querySelectorAll(".operators");
const values = document.getElementById("calculate").querySelectorAll(".values");

console.log(inOut);
console.log(inOut[0].id);
console.log(inOut[0].tagName);
console.log(opperators);
console.log(opperators[0].id);
console.log(values);
console.log(values[0].id);
console.log(values[0].tagName);

// for (let i = 0; i < inOut.length; i++) {
// 	const item = inOut[i].id;
// 	(<HTMLDivElement>document.getElementById(item)).addEventListener(
// 		"click",
// 		() => calculate(item)
// 	);
// }

// function calculate(received: string) {

// 	switch (received){case === "1":
// 		number = 1;
// 	}
// 	if (received === "2") {
// 		calculation = calculation + 2;
// 	}

// 	if (received === "-") {
// 	}
// }

import "./style.css";

let text = "";
let newNumber = 0;
let multi = 0;
let divi = 0;
let root = 0;

// Variablen für die Darstellung  der Arrays.
let arrZahlen: number[] = [];
let arrRechnung: string[] = [];
let arrErgebnis: string[] = [];

// Variablen zur Indexnutzung der Arrays.
let indexZahlen = 0;
let indexRechnung = 0;
let indexErgebnis = 0;

// Erstellt eine Node-Liste von jeweils den Operatoren und den Zahlen
const opperators = document.querySelectorAll("#calculate .operators");
const values = document.querySelectorAll("#calculate .values");

// Kreiert Event Listener für jeden einzelnen Button (Nummerntasten + Operator-Tasten)
// Konvertiert numValue in eine number und  gibt dieses value an die write Function weiter.
// Gibt einen operator value and die calculate Function weiter.
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

// Die Variable Text speichert den Zahlen-Input und schreibt ihn im Rechnungsfeld nieder.
// arrZahlen und arrErgebnis mit dem entsprechenden Index-Count speichern die eingegebenen Zahlen.
// Überschreibt das "Rechnung"-Feld im Anschluss, sodass man seine Eingabe entsprechend sieht.
function write(received: number) {
  console.log("arrZahlen vor Texteingabe= " + arrZahlen);
  text = text + received.toString();

  arrZahlen[indexZahlen] = parseFloat(text);

  arrErgebnis[indexErgebnis] = text;

  (<HTMLDivElement>document.getElementById("input")).innerHTML = text;
}

// Die allmächtige Rechenfunktion prüft anhand der weitergegebenen Operator-ID welche Aktion sie ausführen soll.
function calculate(action: string) {
  // Der CE - / delete - button setzt jegliche gespeicherten Werte zurück, sodass der gesamte Rechner auf 0 steht.
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
    // ??
  } else if (arrZahlen[0] > 0 || arrZahlen[0] < 0) {
    indexZahlen++;
    indexErgebnis++;
  } else if (indexZahlen === 0) {
    arrZahlen[0] = 0;
    indexZahlen++;
    arrErgebnis[0] = "0";
    indexErgebnis++;
  }
  // Fügt die Wurzel an den entsprechenden Index-Stellen ein zeigt sie auf dem Display.
  if (action === "root") {
    arrRechnung[indexRechnung] = "&#8730;";
    indexRechnung++;
    arrErgebnis[indexErgebnis] = "&#8730;";
    indexErgebnis++;
    (<HTMLDivElement>document.getElementById("input")).innerHTML =
      "&#8730;" + text;
    text = "";
  }
  //   Fügt das Pluszeichen an den entsprechenden Index-Stellen ein und zeigt es auf dem Display.
  if (action === "addition") {
    arrRechnung[indexRechnung] = "+";
    indexRechnung++;
    arrErgebnis[indexErgebnis] = "+";
    indexErgebnis++;
    text = "";
    (<HTMLDivElement>document.getElementById("input")).innerHTML = text + "+";
  }
  //   Fügt das Minuszeichen an den entsprechenden Index-Stellen ein und zeigt es auf dem Display.
  if (action === "subtraction") {
    arrRechnung[indexRechnung] = "-";
    indexRechnung++;
    arrErgebnis[indexErgebnis] = "-";
    indexErgebnis++;

    text = "";
    (<HTMLDivElement>document.getElementById("input")).innerHTML = "-";
  }
  //   Fügt das Divisionszeichen an den entsprechenden Index-Stellen ein und zeigt es auf dem Display.
  if (action === "division") {
    arrRechnung[indexRechnung] = "/";
    indexRechnung++;
    arrErgebnis[indexErgebnis] = "/";
    indexErgebnis++;

    text = "";
    (<HTMLDivElement>document.getElementById("input")).innerHTML = "/";
  }
  //   Fügt das Multiplikationszeichen an den entsprechenden Index-Stellen ein und zeigt es auf dem Display.
  if (action === "multiplication") {
    arrRechnung[indexRechnung] = "*";
    indexRechnung++;
    arrErgebnis[indexErgebnis] = "*";
    indexErgebnis++;

    text = "";

    (<HTMLDivElement>document.getElementById("input")).innerHTML = "*";
  }
  // Rechnet das Ergebnis aus und zeigt jeweils die Rechnung erneut und das errechnete Ergebnis.
  if (action === "result") {
    indexZahlen++;

    console.log("arrRechung=" + arrRechnung);
    console.log("arrZahlen=" + arrZahlen);
    // Die for-Schleife läuft durch das gesamte arrZahlen Array, in dem die ganzen Zahlen gespeichert sind
    for (let c = 0; c < arrZahlen.length; c++) {
      // Durch den Index erkennt dieser Teil die Zahl an der arrZahlen Stelle, die gleichgesetzt mit dem Multiplikationszeichen ist, und der folgenden Zahl.
      // Anschließend werden diese beiden Zahlen ausgerechnet. Durch splice werden die alten beiden Rechenzahlen ausgeschnitten und durch die ausgerechnete Multiplikation ersetzt.
      // Das Multiplikationszeichen wird auch ausgeschnitten.
      if (arrRechnung.includes("*")) {
        multi = arrRechnung.indexOf("*");

        newNumber = arrZahlen[multi] * arrZahlen[multi + 1];

        arrZahlen.splice(multi, 2, newNumber);
        arrRechnung.splice(multi, 1);
        console.log("arrzahlen nach multi=" + arrZahlen);
      }
      // Durch den Index erkennt dieser Teil die Zahl an der arrZahlen Stelle, die gleichgesetzt mit dem Divisionszeichen ist, und der folgenden Zahl.
      // Anschließend werden diese beiden Zahlen ausgerechnet. Durch splice werden die alten beiden Rechenzahlen ausgeschnitten und durch die ausgerechnete Division ersetzt.
      // Das Divisionszeichen wird auch ausgeschnitten.
      if (arrRechnung.includes("/")) {
        divi = arrRechnung.indexOf("/");
        newNumber = arrZahlen[divi] / arrZahlen[divi + 1];
        arrZahlen.splice(divi, 2, newNumber);
        arrRechnung.splice(divi, 1);
        console.log("arrzahlen nach divi=" + arrZahlen);
      }
      // Dieser Teil erkennt, ob eine Wurzel verwendet wurde und an welchem Index diese steht. An der entsprechenden Indexstelle von arrZahlen wird nun die Wurzel gezogen.
      // Die Wurzel wird ausgeschnitten.
      if (arrRechnung.includes("&#8730;")) {
        root = arrRechnung.indexOf("&#8730;");
        newNumber = Math.sqrt(arrZahlen[root]);
        arrZahlen[root] = newNumber;
        arrRechnung.splice(root, 1);
        console.log("arrzahlen nach divi=" + arrZahlen);
      }

      // Die For-Schleife prüft, ob ein Plus- oder Minuszeichen vorhanden ist.
      // Die zu nutzende Indexstelle wird erkannt.
      // An der entsprechenden Indexstelle wird die Zahl nun mit der darauf folgenden Indexstelle addiert oder subtrahiert.
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
      // Wenn ein NaN entsteht, wird der Text "Bitte Eingabe überprüfen" ausgeworfen.
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
      // Die werden werden entsprechend zurückgesetzt.
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
}

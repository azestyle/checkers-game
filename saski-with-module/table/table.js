const checker = document.querySelector(".checkers");
export function generateTable() {
    for (let a = 1; a <= 8; a++) {
      const row = document.createElement("div");
      row.setAttribute("value", a);
      row.classList.add("row");
      for (let b = 1; b <= 8; b++) {
        const coll = document.createElement("div");
        generateBgBlack(a, b, coll);
        generateChecker(a, b, coll);
        row.append(coll);
      }
  
      checker.append(row);
    }
  }

  export function generateBgBlack(a, b, element) {
    element.setAttribute("value", b);
    element.classList.add("coll");
    if ((a + b) % 2 !== 0) {
      element.classList.add("bg-black");
    }
    return element;
  }

  export function generateChecker(a, b, element) {
    if (
      (a === 6 && b % 2 !== 0) ||
      (a === 7 && b % 2 === 0) ||
      (a === 8 && b % 2 !== 0)
    ) {
      const checkWhite = document.createElement("div");
      checkWhite.classList.add("check-white");
      element.append(checkWhite);
    } else if (
      (a === 1 && b % 2 === 0) ||
      (a === 2 && b % 2 !== 0) ||
      (a === 3 && b % 2 === 0)
    ) {
      const checkBlack = document.createElement("div");
      checkBlack.classList.add("check-black");
      element.append(checkBlack);
    }
    return element;
  }
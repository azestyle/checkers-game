import { findWhiteNextBox } from '../white-proccessing/white-mowie-plan/white-run.js';
import { clearBlue } from '../clear blue ball/clear.js';
import { clicked } from '../scores/score-table.js';

export function whiteMowieStarter(getRow) {
    const mowieWhite = document.querySelectorAll(".check-white");
    mowieWhite.forEach((el) => {
      const checkWhiteListener = el.getAttribute("check-event") === "true";
      if (!checkWhiteListener) {
        el.addEventListener("click", () => {
          clicked();
          clearBlue();
          const parentDiv = el.parentElement;
          const parentColl = el.parentElement.getAttribute("value");
          const minusRow = el.parentElement.parentElement.getAttribute("value") - 1;
          findWhiteNextBox(minusRow, getRow, parentColl, parentDiv);
        });
        el.setAttribute("check-event", "true");
      }
    });
  }
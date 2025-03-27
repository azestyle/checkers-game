import { clearBlue } from '../clear blue ball/clear.js';
import { findBlackNextBox } from '../black-proccessing/black-moowie-plan/black-run.js';
import { clicked } from '../scores/score-table.js';

export function blackMowieStarter(getRow) {
    const mowieBlack = document.querySelectorAll(".check-black");
    mowieBlack.forEach((el) => {
      const checkBlackListener = el.getAttribute("check-event") === "true";
      if (!checkBlackListener) {
        el.addEventListener("click", () => {
          clicked();
          clearBlue();
          const blackParent = el.parentElement;
          const blackParentValue = el.parentElement.getAttribute("value");
          const blackPlusRow =el.parentElement.parentElement.getAttribute("value");
          findBlackNextBox(blackPlusRow, getRow, blackParentValue, blackParent);
        });
      }
      el.setAttribute("check-event", "true");
    });
  }
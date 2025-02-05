import { calculateMovie } from "../../calculate-movie/calculated.js";
import { clearBlue } from "../../clear blue ball/clear.js";
import { loop } from "../../loop/loop.js";
import { mowie } from "../../scores/score-table.js";
import { checkWhiteCrown } from "../../white-crown-movie-plan/white-crown-start.js";
import { jumpToBlack } from "../white for jump/jump-white.js";
import { disabledBlack, total, whiteSelfDisabled } from './../../game rules/rules.js';


export function findWhiteNextBox(number, element, parentColl, parentDiv) {
    let findElement = null;
    element.forEach((el) => {
      if (el.getAttribute("value") === number.toString()) {
        findElement = el;
      }
    });
    return findWhiteNextPosition(findElement, parentColl, parentDiv);
  }

  export function findWhiteNextPosition(element, collNumber, parentDiv) {
    const getCalculate = calculateMovie(element, collNumber);
    isHaveBlackStone(getCalculate, parentDiv);
  }

  export function isHaveBlackStone(element, parentDiv) {
    let hasBlack = false;
    element.forEach((el) => {
      const isBlack = el.querySelector(".check-black")||el.querySelector('.black-crown')||null;
      if (isBlack) {
        jumpToBlack(isBlack, parentDiv, element);
        hasBlack = true;
      }
    });
    if (!hasBlack) {
      getWhiteBlue(element, parentDiv);
    }
  }

  export function getWhiteBlue(params, parentDiv) {
    clearBlue();
    const [first, second] = params;
    if (first && first.innerHTML === "") {
      const blue = document.createElement("div");
      blue.classList.add("white-shadow");
      first.append(blue);
    }
    if (second && second.innerHTML === "") {
      const blue = document.createElement("div");
      blue.classList.add("white-shadow");
      second.append(blue);
    }
    const blueBall = document.querySelectorAll(".white-shadow");
    changeWhiteStone(blueBall, parentDiv);
  }

  export function changeWhiteStone(element, parentDiv) {
    element.forEach((el) => {
      el.addEventListener("click", () => {
       mowie()
        const keepParentRow=Number(el.parentElement.parentElement.getAttribute('value'));
        if (keepParentRow===1) {
          const blueDiv = el.parentElement;
          blueDiv.innerHTML = "";
          const corona=document.createElement('img');
          corona.src='./images/black.png'
          const crownStone = document.createElement("div");
          crownStone.append(corona)
          crownStone.classList.add("white-crown");
          blueDiv.append(crownStone);
          parentDiv.innerHTML = "";
          checkWhiteCrown();
          
        }
        else{
        const blueDiv = el.parentElement;
        blueDiv.innerHTML = "";
        const whiteStone = document.createElement("div");
        whiteStone.classList.add("check-white");
        blueDiv.append(whiteStone);
        parentDiv.innerHTML = "";
        total();
        }
        clearBlue();
        loop();
      });
    });
  }


  const tet = async ()=>{
    const tedt = await sometyhing;
    console.log('test')
  }
  tet();
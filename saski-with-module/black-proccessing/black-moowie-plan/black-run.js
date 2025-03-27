import { clearBlue } from '../../clear blue ball/clear.js';
import { loop } from '../../loop/loop.js';
import { calculateMovie } from '../../calculate-movie/calculated.js';
import { jumpToWhite } from '../black for jump/jump-black.js';
import { total } from './../../game rules/rules.js';
import { checkBlackCrown } from '../../black-crown-mowie-plan/black-crown-start.js';
import { mowie } from '../../scores/score-table.js';



export function findBlackNextBox(number, element, blackParentValue, blackParent) {
    let blackFind = null;
    element.forEach((el) => {
      if (el.getAttribute("value") === (Number(number) + 1).toString()) {
        blackFind = el;
      }
    });
    return  findBlackNextPosition(blackFind, blackParentValue, blackParent);
  }

  function findBlackNextPosition(element, collNumber, parentDiv) {
    const getBlackCalculate = calculateMovie(element, collNumber);
    isHaveWhiteStone(getBlackCalculate, parentDiv);
    
  }

  export function isHaveWhiteStone(element, parentDiv) {
    let hasWhite = false;
    element.forEach((el) => {
      const isWhite = el.querySelector(".check-white")||el.querySelector('.white-crown')||null;
      if (isWhite) {
        jumpToWhite(isWhite, parentDiv, element);
        hasWhite = true;
      }
    });
    if (!hasWhite) {
      getBlackBlue(element, parentDiv);
    }
  }

  export function getBlackBlue(params, parentDiv) {
    const [first, second] = params;
    if (first && first.innerHTML === "") {
      const blue = document.createElement("div");
      blue.classList.add("black-shadow");
      first.append(blue);
    }
    if (second && second.innerHTML === "") {
      const blue = document.createElement("div");
      blue.classList.add("black-shadow");
      second.append(blue);
    }
    const blueBall = document.querySelectorAll(".black-shadow");
    changeBlackStone(blueBall, parentDiv);
  }

 export function changeBlackStone(element, parentDiv) {
  element.forEach((el) => {
    el.addEventListener("click", () => {
      mowie()
     const keepParentRow=Number(el.parentElement.parentElement.getAttribute('value'));
     if (keepParentRow===8) {
     const blueDiv = el.parentElement;
     blueDiv.innerHTML = "";
     const corona=document.createElement('img');
     corona.src='./images/white.png'
     const crownStone = document.createElement("div");
     crownStone.append(corona);
     crownStone.classList.add('black-crown');
     blueDiv.append(crownStone);
     parentDiv.innerHTML = "";
     checkBlackCrown();
      }else{
        const blueDiv = el.parentElement;
        blueDiv.innerHTML = "";
        const BlackStone = document.createElement("div");
        BlackStone.classList.add("check-black");
        blueDiv.append(BlackStone);
        parentDiv.innerHTML = "";
        total();
      }        
      
      
      clearBlue();
      loop();
    });
  });
}
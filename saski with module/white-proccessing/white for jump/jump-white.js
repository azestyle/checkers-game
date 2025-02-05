import { clearBlue } from "../../clear blue ball/clear.js";
import { getWhiteBlue } from "../white-mowie-plan/white-run.js";
import { calculateMovie } from "../../calculate-movie/calculated.js";
import { getWhiteEmptyBox } from "../find-for-white-empty/white-for-empty-box.js";

const checker = document.querySelector(".checkers");

export function jumpToBlack(element, parentDiv) {
    const blackElement = element.parentElement;
    const checkBlackValue = element.parentElement.getAttribute("value");
    const blackRow = element.parentElement.parentElement
    const blackRowValue=Number(element.parentElement.parentElement.getAttribute("value"));
    const checkSelfWhiteValue=Number(parentDiv.getAttribute("value"));
    const keepBox = takeForWhiteNextBox( blackRow, checkSelfWhiteValue);
    const clear=ForWhiteNextbyNext(keepBox,checkSelfWhiteValue, blackRowValue);
    checkForWhitebox(clear, parentDiv,blackRow);
    
    }

export function takeForWhiteNextBox( blackRow, parentValue) {
    const array = [];
    const findBlack = blackRow ? blackRow.querySelectorAll(".bg-black"):null;
    if(findBlack){
      findBlack.forEach((el) => {
        if ((el.querySelector(".check-black")||el.querySelector('.black-crown')) && (el.getAttribute("value") === (parentValue - 1).toString() || el.getAttribute("value") === (parentValue + 1).toString()))
          {
          array.push(el);
            } 
         });
    }
     return array;   
     }     

export function ForWhiteNextbyNext(array, parentValue, whiteRowValue) {
    const nextRow = checker.querySelector(`.row[value="${whiteRowValue - 1}"]`);   
  clearBlue();
    let snapArray = [];
    array.forEach((el) => {
      if (Number(el.getAttribute("value")) < parentValue) {
        let snap = Number(el.getAttribute("value"));
        let isbusy = nextRow ? nextRow.querySelector(`.bg-black[value="${snap - 1}"]`):null;
        if (isbusy && isbusy.innerHTML === "") {
          snapArray.push(isbusy);
        }
      } else if (Number(el.getAttribute("value")) > parentValue) {
        let snap = Number(el.getAttribute("value"));
        let isbusy = nextRow ? nextRow.querySelector(`.bg-black[value="${snap + 1}"]`):null;
        if (isbusy &&isbusy.innerHTML === "") {
          snapArray.push(isbusy);
        }
      }
    });
    return snapArray;
  }
  
  
export function checkForWhitebox(clear, parentDiv, blackRow) {  
    const stringNUm=parentDiv.getAttribute('value'); 
    if (clear.length > 0) {
        getWhiteEmptyBox(clear, parentDiv,blackRow);
      } else if (clear.length === 0) {
        getWhiteBlue(calculateMovie(blackRow, stringNUm), parentDiv);
        
      }
    }  


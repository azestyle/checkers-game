import { clearBlue } from '../../clear blue ball/clear.js';
import { getBlackBlue } from '../black-moowie-plan/black-run.js';
import { calculateMovie } from '../../calculate-movie/calculated.js';
import { getBlackEmptyBox } from '../find-for-black-empty/black-for-empty-box.js';
const checker = document.querySelector(".checkers");

export function jumpToWhite(element, parentDiv,) {
    const whiteElement = element.parentElement;
    const checkWhiteValue = element.parentElement.getAttribute("value");
    const whiteRowValue = Number(element.parentElement.parentElement.getAttribute("value"));
    const whiteRow = element.parentElement.parentElement;
    const checkSelfBlackValue = Number(parentDiv.getAttribute("value"));
    const keepToBox = takeForBlackNextBox(whiteRow,checkSelfBlackValue);
    const clearBox = ForBlackNextbyNext(keepToBox,checkSelfBlackValue,whiteRowValue);  
    checkForBlackbox(clearBox, parentDiv, whiteElement,whiteRow);    
    }

export function takeForBlackNextBox( whiteRow, parentValue) {
        let array = [];
        const findWhite = whiteRow?whiteRow.querySelectorAll(".bg-black"):null;
        if (findWhite) {
          findWhite.forEach((el) => {
            if ((el.querySelector(".check-white")||el.querySelector('.white-crown')) && (el.getAttribute("value") === (parentValue - 1).toString() || el.getAttribute("value") === (parentValue + 1).toString()))
              {
              array.push(el);
                } 
             });
        }
         return array;   
         } 

export function ForBlackNextbyNext(array, parentValue, whiteRowValue) {
    const nextRow = checker.querySelector(`.row[value="${whiteRowValue + 1}"]`);
    clearBlue();
    let snapArray = [];
    array.forEach((el) => {
      if (Number(el.getAttribute("value")) < parentValue) {
        let snap = Number(el.getAttribute("value"));
        let isbusy = nextRow?nextRow.querySelector(`.bg-black[value="${snap - 1}"]`):null;
        if (isbusy && isbusy.innerHTML === "") {
          snapArray.push(isbusy);
        }
      } else if (Number(el.getAttribute("value")) > parentValue) {
        let snap = Number(el.getAttribute("value"));
        let isbusy = nextRow?nextRow.querySelector(`.bg-black[value="${snap + 1}"]`):null;
        if (isbusy &&isbusy.innerHTML === "") {
          snapArray.push(isbusy);
        }
      }
    });
    return snapArray;
  }
  
export function checkForBlackbox(clearBox, parentDiv, srcBlackElement,whiteRow) {  
    const stringNUm=parentDiv.getAttribute('value'); 
  if (clearBox.length > 0) {
  getBlackEmptyBox(clearBox, parentDiv,whiteRow);
      
    } else if (clearBox.length === 0) {
      getBlackBlue(calculateMovie(whiteRow, stringNUm), parentDiv);
    }
  }  
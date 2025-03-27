import { takeForBlackNextBox } from "../black for jump/jump-black.js";
import { ForBlackNextbyNext } from "../black for jump/jump-black.js";
import { takeAndClearWhiteStone } from "../find-for-black-empty/black-for-empty-box.js";
import { blackSelfDisabled, disabledBlack, disabledWhite, total } from './../../game rules/rules.js';

export function blackAfterCheck(element){
if(element){
  const elementValue=Number(element.getAttribute('value'));
const row=Number(element.parentElement.getAttribute('value'));
const front=document.querySelector(`.row[value="${row - 1}"]`);
const back=document.querySelector(`.row[value="${row + 1}"]`);
const backValue=back?Number(back.getAttribute('value')):null;
const frontValue=Number(front.getAttribute('value'));
const backArray=takeForBlackNextBox(back,elementValue);
const frontArray=takeForBlackNextBox(front,elementValue);
const clearA=ForBlackNextbyNext(frontArray,elementValue,(frontValue-2));
const clearB=ForBlackNextbyNext(backArray,elementValue,(backValue));

if(clearA.length>0||clearB.length>0){
  blueBall(clearA,element,front);  
  blueBall(clearB,element,back); 
} 

if(clearA.length===0 && clearB.length===0){
  
  blackSelfDisabled();
  disabledWhite();
  
  }else{
   
    blackSelfDisabled()
  }

}


}

function blueBall(array,element,row) {
array.forEach(el => {
    const blued = document.createElement("div");
    blued.classList.add("black-shadow");
    el.append(blued);
    });
    takeAndClearWhiteStone (element,row);
    
}
import { ForWhiteNextbyNext } from "../white for jump/jump-white.js";
import { takeForWhiteNextBox } from "../white for jump/jump-white.js";
import { takeAndClearBlackStone } from "../find-for-white-empty/white-for-empty-box.js";
import {  disabledBlack,  whiteSelfDisabled } from "../../game rules/rules.js";


export function whiteAfterCheck(element){
  if(element){
    const elementValue=Number(element.getAttribute('value'));
    const row=Number(element.parentElement.getAttribute('value'));
    const front=document.querySelector(`.row[value="${row - 1}"]`);
    const back=document.querySelector(`.row[value="${row + 1}"]`);
    const backValue=Number(back.getAttribute('value'));
    const backArray=takeForWhiteNextBox(back,elementValue);
    const frontArray=takeForWhiteNextBox(front,elementValue);
    const clearA=ForWhiteNextbyNext(frontArray,elementValue,(backValue-2));
    const clearB=ForWhiteNextbyNext(backArray,elementValue,(backValue+2));
    
    if(clearA.length>0||clearB.length>0){
      blueBall(clearA,element,front);  
      blueBall(clearB,element,back)
    }
    
    
    if(clearA.length===0 && clearB.length===0){
      whiteSelfDisabled();
      disabledBlack()
    }else{
         
          whiteSelfDisabled();
        }
    
  }

}



function blueBall(array,element,row) {
array.forEach(el => {
    const blued = document.createElement("div");
    blued.classList.add("white-shadow");
    el.append(blued);
    
    });
    takeAndClearBlackStone(element,row);
    
}


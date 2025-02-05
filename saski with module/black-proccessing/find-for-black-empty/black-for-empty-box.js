
import { checkBlackCrown } from "../../black-crown-mowie-plan/black-crown-start.js";
import { clearBlue } from "../../clear blue ball/clear.js";
import { loop } from "../../loop/loop.js";
import { addBlack } from "../../scores/score-table.js";
import { blackAfterCheck } from "../black-next-checked/black-after-check.js";


export function getBlackEmptyBox(clearBox, parentDiv, whiteRow) {
    clearBox.forEach((el) => {
      const blued = document.createElement("div");
      blued.classList.add("black-shadow");
      el.append(blued);
    });
    takeAndClearWhiteStone(parentDiv,whiteRow);
  };

export function takeAndClearWhiteStone(parentDiv,whiteRow){
    const keepBlue=document.querySelectorAll('.black-shadow')
    keepBlue.forEach((el)=>el.addEventListener('click',()=>{
    const checkRow=el && el.closest('.row')? Number(el.closest('.row').getAttribute('value')): null;
    const blueDivValue=el.parentElement?Number(el.parentElement.getAttribute(('value'))):null;
    const blackStoneValue=Number(parentDiv.getAttribute('value'))
      if (blueDivValue && blueDivValue<blackStoneValue) {
          if (checkRow===8) {
            const corona=document.createElement('img');
            corona.src='./images/white.png'
           const blackCrown=document.createElement('div');
           blackCrown.append(corona)
           blackCrown.classList.add('black-crown');
           const findWhite=whiteRow.querySelector(`.bg-black[value="${blueDivValue+1}"]`);
          findWhite.innerHTML='';
          el.parentElement.append(blackCrown);
          parentDiv.innerHTML='';
          clearBlue();
          checkBlackCrown();         
          }else{
            const BlackStone = document.createElement("div");
            BlackStone.classList.add("check-black");
            const findWhite=whiteRow.querySelector(`.bg-black[value="${blueDivValue+1}"]`);
            findWhite.innerHTML=''
            el.parentElement.append(BlackStone);
            parentDiv.innerHTML=''
            blackAfterCheck(el.parentElement)
          }            
                    
          addBlack();
         } 
         else if(blueDivValue && blueDivValue>blackStoneValue){
          if (checkRow===8) {
            const corona=document.createElement('img');
            corona.src='./images/white.png'
            const blackCrown=document.createElement('div');
            blackCrown.append(corona)
            blackCrown.classList.add('black-crown');
            const findWhite=whiteRow.querySelector(`.bg-black[value="${blueDivValue-1}"]`);
           findWhite.innerHTML='';
           el.parentElement.append(blackCrown);
           parentDiv.innerHTML='';
           clearBlue();
           checkBlackCrown();         
           }else{
             const BlackStone = document.createElement("div");
             BlackStone.classList.add("check-black");
             const findWhite=whiteRow.querySelector(`.bg-black[value="${blueDivValue-1}"]`);
             findWhite.innerHTML=''
             el.parentElement.append(BlackStone);
             parentDiv.innerHTML='' 
             blackAfterCheck(el.parentElement)
           }
           addBlack();
        } 
         loop();
      
        
       
    }))
    
    }  
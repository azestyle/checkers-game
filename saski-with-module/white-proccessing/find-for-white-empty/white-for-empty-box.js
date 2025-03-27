
import { clearBlue } from "../../clear blue ball/clear.js";
import { loop } from "../../loop/loop.js";
import { addWhite } from "../../scores/score-table.js";
import { checkWhiteCrown } from "../../white-crown-movie-plan/white-crown-start.js";
import { whiteAfterCheck } from "../white-next-checked/white-after-check.js";



export function getWhiteEmptyBox(clear, parentDiv,blackRow) {
    clear.forEach((el) => {
      const blued = document.createElement("div");
      blued.classList.add("white-shadow");
      el.append(blued);
    });
    takeAndClearBlackStone(parentDiv,blackRow);
  }

export function takeAndClearBlackStone(parentDiv,blackRow){
    const keepBlue=document.querySelectorAll('.white-shadow');
    if (keepBlue) {
      keepBlue.forEach((el)=>el.addEventListener('click',()=>{
      const checkRow=el && el.closest('.row')? Number(el.closest('.row').getAttribute('value')): null; 
      const blueDivValue=el.parentElement?Number(el.parentElement.getAttribute(('value'))):null;
        const WhiteStoneValue=Number(parentDiv.getAttribute('value'));
      if (blueDivValue&&blueDivValue<WhiteStoneValue) {
            if (checkRow===1) {
              const corona=document.createElement('img');
              corona.src='./images/black.png'
              const whiteCrown=document.createElement('div');
              whiteCrown.append(corona)
              whiteCrown.classList.add('white-crown');
              const findBlack=blackRow.querySelector(`.bg-black[value="${blueDivValue+1}"]`);
              findBlack.innerHTML='';
              el.parentElement.append(whiteCrown);
              parentDiv.innerHTML='';
              clearBlue()
              checkWhiteCrown();
              
            }else{
              const whiteStone = document.createElement("div");
              whiteStone.classList.add("check-white");
              const findBlack=blackRow.querySelector(`.bg-black[value="${blueDivValue+1}"]`);
              findBlack.innerHTML=''
              el.parentElement.append(whiteStone);
              parentDiv.innerHTML='';
              whiteAfterCheck(el.parentElement)
            }
            addWhite();
             } 
             
            else if(blueDivValue&&blueDivValue>WhiteStoneValue){
              if (checkRow===1) {
                const corona=document.createElement('img');
                corona.src='./images/black.png'
                const whiteCrown=document.createElement('div');
                whiteCrown.append(corona)
                whiteCrown.classList.add('white-crown');
                const findBlack=blackRow.querySelector(`.bg-black[value="${blueDivValue-1}"]`);
                findBlack.innerHTML='';
                el.parentElement.append(whiteCrown);
                parentDiv.innerHTML='';
                clearBlue();
                checkWhiteCrown();
              }else{

                const whiteStone = document.createElement("div");
                whiteStone.classList.add("check-white");
                const findBlack=blackRow.querySelector(`.bg-black[value="${blueDivValue-1}"]`);
                findBlack.innerHTML=''
                el.parentElement.append(whiteStone);
                parentDiv.innerHTML=''
                whiteAfterCheck(el.parentElement)
                
              }
              addWhite();
          }
          
          loop();
          
         })) 
    }
    
      
     }   
      
        
        
        
          
    
    
    
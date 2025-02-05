import { blackSelfDisabled, disabledWhite, total, whiteSelfDisabled } from "../game rules/rules.js";
import { addBlack, clicked, mowie, transform } from "../scores/score-table.js";
import { blueProccesFixed, findCrownNextBox, findCrownReTry, takeBox,} from "../white-crown-movie-plan/white-crown-start.js";
import { clearBlue } from "./../clear blue ball/clear.js";

 



export function checkBlackCrown() {
  transform();
  const blackCrown = document.querySelectorAll(".black-crown");
  if (blackCrown) {
    blackCrown.forEach((el) => {
      el.addEventListener("click", () => {
        clearBlue();
        clicked();
        findCrownBlackRow(el);
      });
    });
  }
  blackSelfDisabled();
  disabledWhite();
}

function findCrownBlackRow(element) {
  const keepAllBox = [];
  const selfRow = element.closest(".row");
  const rowWalue = Number(selfRow.getAttribute("value"));
 
  const lowRow =
    document.querySelector(`.row[value="${rowWalue - 1}"]`) || null;
  const highRow =
    document.querySelector(`.row[value="${rowWalue + 1}"]`) || null;
 
  const lowArray = takeBox(element, lowRow);
  const highArray = takeBox(element, highRow);
  keepAllBox.push(lowArray, highArray);
  const flatBox = keepAllBox.flat();
  crownCheckBlackEmpty(flatBox, element);
}

function crownCheckBlackEmpty(array, element) {
  const stone = ".check-white";
  let isCheck = false;
  for (let el of array) {
    const suspect = el ? el.querySelector(stone)||el.querySelector('.white-crown') : null;
    if (suspect) {
      crownCheckNexBlacktRow(array, stone, element);
      isCheck = true;
      break;
    }
  }
  if (!isCheck) {
    writeBlue(array, element);
  }
}

function writeBlue(array,element){
 array.forEach((el)=>{
  if(el && el.innerHTML===""){
    const blue = document.createElement("div");
    blue.classList.add("black-shadow");
    el.append(blue);
  }
 })
 clickedBlue(element);
}
function clickedBlue(stone){
  const keepAllBlue=document.querySelectorAll('.black-shadow');
  keepAllBlue.forEach((el)=>{
      el.addEventListener('click',()=>{
      const blueParent=el.parentElement
         blueParent.innerHTML='';
         blueParent.append(stone);
         clearBlue();
         total();
         mowie();
      })
  })
}

function crownCheckNexBlacktRow(array, stone, crownstone) {
  let keepArray = [];
  array.forEach((el) => {
    if (el) {
      const checkStone = el.querySelector(stone)||el.querySelector('.white-crown');
      if (checkStone) {
        const crownRow = crownstone.closest(".row");
        const crownRowValue = Number(crownRow.getAttribute("value"));
        const checkStoneRow = checkStone.closest(".row");
        const chckStnRwValue = Number(checkStoneRow.getAttribute("value"));
        let resultate = findCrownNextBox(crownRowValue,chckStnRwValue,crownstone, checkStone );
         keepArray.push(resultate);
            }
    }
  });
  isBusyCrownNextBlackbox(keepArray, array, crownstone);
}
  
function isBusyCrownNextBlackbox(array,oldArray,crownStone){
    let isCheck=false
for (let a of array) {
   if(a && a.innerHTML===''&&!isCheck){
    isCheck=true;
    writeBlueCrownNextBlackBox(array,crownStone);
     break;
   }
}
if (!isCheck) {
    writeBlue(oldArray,crownStone);
}
}          
         
function writeBlueCrownNextBlackBox(newArray,crownStone){

    newArray.forEach((el)=>{
        if (el&&el.innerHTML==='') {
            const blue = document.createElement("div");
            blue.classList.add("black-shadow");
            el.append(blue);
        };
    });
    secondryPartyBlue(crownStone);
};       
       
function secondryPartyBlue(crownStone){
const blue=document.querySelectorAll('.black-shadow');
blue.forEach((el)=>{
    el.addEventListener('click',(e)=>{
      const targetStone=blueProccesFixed(e,crownStone);
      const blueDiv=el.closest('.bg-black');
      blueDiv.innerHTML=''
      blueDiv.append(crownStone);
      targetStone.innerHTML=''
      clearBlue();
      crownReBlackTry(blueDiv);
      });
    });  
        
     
 }; 
 
 function crownReBlackTry(blueDiv){
    const crown=blueDiv.querySelector('.black-crown');
    const stone='.check-white' 
    findCrownBlackReTry(crown,stone);
  }

function findCrownBlackReTry(element,stone){
    
      const keepAllBox=[];
      const selfRow=element.closest('.row');
      const rowWalue=Number(selfRow.getAttribute('value'));
      const lowRow=document.querySelector(`.row[value="${rowWalue - 1}"]`)||null;
      const highRow=document.querySelector(`.row[value="${rowWalue + 1}"]`)||null;
      const lowArray=takeBox(element,lowRow);
      const highArray=takeBox(element,highRow);
      keepAllBox.push(lowArray,highArray);
      const flatBox=keepAllBox.flat();
      crownCheckBlackReTry(flatBox,element,stone);
       }


       function crownCheckBlackReTry(array,element,stone){
        let isCheck=false;
        for(let el of array) {
            const suspect=el? el.querySelector(stone)||el.querySelector('.white-crown'):null;
            if (suspect) {
             blackSelfDisabled();
             whiteSelfDisabled();
             crownCheckNextBlackReTry(array,stone,element);
             addBlack();
             isCheck=true;
              break;              
            }            
        }
        if (!isCheck) {
        blackSelfDisabled();
        disabledWhite();
        addBlack();
            return null;
        }
    
    }  

    function crownCheckNextBlackReTry(array,stone,crownstone){
            let keepArray=[]
        array.forEach((el)=>{
        if(el){
           const checkStone= el.querySelector(stone)||el.querySelector('.white-crown');
          if(checkStone){
          const crownRow=crownstone.closest('.row');
          const crownRowValue=Number(crownRow.getAttribute('value'));
          const checkStoneRow=checkStone.closest('.row');
          const chckStnRwValue=Number(checkStoneRow.getAttribute('value'));
           let resultate=findCrownNextBox(crownRowValue,chckStnRwValue,crownstone,checkStone);
           keepArray.push(resultate);
           }
           
           }
        });
        isBusyCrownNextBlackRetry(keepArray,crownstone)        
        } 
           
        function isBusyCrownNextBlackRetry(array,crownStone){
            let isCheck=false
        for (let a of array) {
           if(a && a.innerHTML===''&&!isCheck){
            isCheck=true;
            writeBlueCrownNextBlackBox(array,crownStone);
             break;
           }
        }
        if (!isCheck) {
          disabledWhite();
            return null
        }
        }
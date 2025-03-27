
import { blackSelfDisabled, total, whiteSelfDisabled } from '../game rules/rules.js';
import { addWhite, clicked, mowie, transform } from '../scores/score-table.js';
import { clearBlue } from './../clear blue ball/clear.js';
import { disabledBlack } from './../game rules/rules.js';

export function checkWhiteCrown(){
    transform();
    const whiteCrown=document.querySelectorAll('.white-crown');
    if(whiteCrown){
        whiteCrown.forEach((el)=>{
           el.addEventListener('click',()=>{
            clicked();
            clearBlue();
            findCrownRow(el);
            
           })
            
        })
    }
    whiteSelfDisabled();
    disabledBlack();
}

export function findCrownRow(element){
  
const keepAllBox=[];
const selfRow=element.closest('.row');
const rowWalue=Number(selfRow.getAttribute('value'));
const lowRow=document.querySelector(`.row[value="${rowWalue - 1}"]`)||null;
const highRow=document.querySelector(`.row[value="${rowWalue + 1}"]`)||null;
const lowArray=takeBox(element,lowRow);
const highArray=takeBox(element,highRow);
keepAllBox.push(lowArray,highArray);
const flatBox=keepAllBox.flat();
crownCheckEmpty(flatBox,element);
}

export function takeBox(element,row){
if(row){
    const selfCollValue=Number(element.parentElement.getAttribute('value'));
    const firstColl=row.querySelector(`.bg-black[value="${selfCollValue - 1}"]`)||null;
    const secondColl=row.querySelector(`.bg-black[value="${selfCollValue + 1}"]`)||null;
    return [firstColl,secondColl]
}else{
    return null
}
}


function crownCheckEmpty(array,element){
    const stone='.check-black'
    let isCheck=false;
    for(let el of array) {
        const suspect=el? el.querySelector(stone)||el.querySelector('.black-crown'):null;
        if (suspect) {
         crownCheckNextRow(array,stone,element);
         isCheck=true;
          break;              
        }            
    }
    if (!isCheck) {    
    writeBlue(array,element);
    }

}
export function writeBlue(array,element){   
 array.forEach((el)=>{
  if(el && el.innerHTML===""){
    const blue = document.createElement("div");
    blue.classList.add("white-shadow");
    el.append(blue);
  }
 })
 clickedBlue(element);
}


function clickedBlue(stone){
    const keepAllBlue=document.querySelectorAll('.white-shadow');
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

export function crownCheckNextRow(array,stone,crownstone){
    let keepArray=[]
array.forEach((el)=>{
if(el){
   const checkStone= el.querySelector(stone)||el.querySelector('.black-crown');
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
isBusyCrownNextbox(keepArray,array,crownstone);
}
   
   
   
 

export function findCrownNextBox(elementRowValue,targetRowVaule,element,target){
 
if (elementRowValue<targetRowVaule) {
    const nextRow=document.querySelector(`.row[value="${targetRowVaule + 1}"]`)||null;
    if (nextRow) {
        if (Number(element.parentElement.getAttribute('value')<Number(target.parentElement.getAttribute('value')))) {
            const targetDiv=Number(target.parentElement.getAttribute('value'));
            const keepBox=nextRow.querySelector(`.bg-black[value="${targetDiv + 1}"]`)||null;
            return keepBox;
        }else if(Number(element.parentElement.getAttribute('value')>Number(target.parentElement.getAttribute('value')))){
            const targetDiv=Number(target.parentElement.getAttribute('value'));
            const keepBox=nextRow.querySelector(`.bg-black[value="${targetDiv - 1}"]`)||null;
            return keepBox;
        }
    }else{
        return null
    }
    
}else if(elementRowValue>targetRowVaule){
 const nextRow=document.querySelector(`.row[value="${targetRowVaule - 1}"]`)||null;
 if (nextRow) {
     if (Number(element.parentElement.getAttribute('value')<Number(target.parentElement.getAttribute('value')))) {
         const targetDiv=Number(target.parentElement.getAttribute('value'));
         const keepBox=nextRow.querySelector(`.bg-black[value="${targetDiv + 1}"]`)||null;
         return keepBox;
     }else if(Number(element.parentElement.getAttribute('value')>Number(target.parentElement.getAttribute('value')))){
         const targetDiv=Number(target.parentElement.getAttribute('value'));
         const keepBox=nextRow.querySelector(`.bg-black[value="${targetDiv - 1}"]`)||null;
         return keepBox;
     }
 } else{
    return null
 }

}

}


function isBusyCrownNextbox(array,oldArray,crownStone){
    let isCheck=false
for (let a of array) {
   if(a && a.innerHTML===''&&!isCheck){
    isCheck=true;
    writeBlueCrownNextBox(array,crownStone);
     break;
   }
}
if (!isCheck) {
    writeBlue(oldArray,crownStone);
}
}


function writeBlueCrownNextBox(newArray,crownStone){

    newArray.forEach((el)=>{
        if (el&&el.innerHTML==='') {
            const blue = document.createElement("div");
            blue.classList.add("white-shadow");
            el.append(blue);
        };
    });
    secondryPartyBlue(crownStone);
};

function secondryPartyBlue(crownStone){
const blue=document.querySelectorAll('.white-shadow');
blue.forEach((el)=>{
    el.addEventListener('click',(e)=>{
      const targetStone=blueProccesFixed(e,crownStone);
      const blueDiv=el.closest('.bg-black');
      blueDiv.innerHTML=''
      blueDiv.append(crownStone);
      targetStone.innerHTML=''
      clearBlue();
      crownReTry(blueDiv);
      });
    });  
        
     
 };      



export function blueProccesFixed(blue,crownStone){
    let targetBox=null
    const blueBox=Number(blue.target.closest('.bg-black').getAttribute('value'));
    const blueRow=Number(blue.target.closest('.row').getAttribute('value'));
    const crownBox=Number(crownStone.closest('.bg-black').getAttribute('value'));
    const crownRow=Number(crownStone.closest('.row').getAttribute('value'));
    if(blueRow<crownRow){
        if(blueBox<crownBox){
          const targetRow=document.querySelector(`.row[value="${crownRow-1}"]`);
          targetBox=targetRow.querySelector(`.bg-black[value="${crownBox-1}"]`)
        }else if(blueBox>crownBox){
            const targetRow=document.querySelector(`.row[value="${crownRow-1}"]`);
            targetBox=targetRow.querySelector(`.bg-black[value="${crownBox+1}"]`)
        }
        
    }else if(blueRow>crownRow){
     if(blueBox<crownBox){
        const targetRow=document.querySelector(`.row[value="${crownRow+1}"]`);
        targetBox=targetRow.querySelector(`.bg-black[value="${crownBox-1}"]`)
      }else if(blueBox>crownBox){
          const targetRow=document.querySelector(`.row[value="${crownRow+1}"]`);
          targetBox=targetRow.querySelector(`.bg-black[value="${crownBox+1}"]`)
      }
     
    }else{
        return null
    }

    return targetBox

};

function crownReTry(blueDiv){
  const crown=blueDiv.querySelector('.white-crown'); 
  const stone='.check-black'
 findCrownReTry(crown,stone);
}


export function findCrownReTry(element,stone){
  
    const keepAllBox=[];
    const selfRow=element.closest('.row');
    const rowWalue=Number(selfRow.getAttribute('value'));
    const lowRow=document.querySelector(`.row[value="${rowWalue - 1}"]`)||null;
    const highRow=document.querySelector(`.row[value="${rowWalue + 1}"]`)||null;
    const lowArray=takeBox(element,lowRow);
    const highArray=takeBox(element,highRow);
    keepAllBox.push(lowArray,highArray);
    const flatBox=keepAllBox.flat();
    crownCheckReTry(flatBox,element,stone);
     }
    
    
     function crownCheckReTry(array,element,stone){
        let isCheck=false;
        for(let el of array) {
            const suspect=el? el.querySelector(stone)||el.querySelector('.black-crown'):null;
            if (suspect) {
            blackSelfDisabled();
            whiteSelfDisabled();
             crownCheckNextReTry(array,stone,element);
             addWhite();
             isCheck=true;
              break;              
            }            
        }
        if (!isCheck) {
        whiteSelfDisabled();
        disabledBlack();
        addWhite();
            return null;
        
        }
    
    }
   

   function crownCheckNextReTry(array,stone,crownstone){
        let keepArray=[]
    array.forEach((el)=>{
    if(el){
       const checkStone= el.querySelector(stone)||el.querySelector('.black-crown');
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
    isBusyCrownNextRetry(keepArray,crownstone);
    }


    function isBusyCrownNextRetry(array,crownStone){
        let isCheck=false
    for (let a of array) {
       if(a && a.innerHTML===''&&!isCheck){
        isCheck=true;
        writeBlueCrownNextBox(array,crownStone);
         break;
       }
    }
    if (!isCheck) {
        disabledBlack();
        return null
    }
    }
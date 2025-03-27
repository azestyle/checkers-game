
export function total(){
    disabledWhite();
    disabledBlack();
}

export function disabledWhite(){
    const white=document.querySelectorAll('.check-white');
    const crown=document.querySelectorAll('.white-crown');
    white.forEach(el=>{
        if (el.classList.contains('disabled')) {
          el.classList.remove('disabled');
        } else{
          el.classList.add('disabled');
        }
    })
    if (crown) {
       crown.forEach(el=>{
      if (el.classList.contains('disabled')) {
        el.classList.remove('disabled');
      } else{
        el.classList.add('disabled');
      }
  })
    }
   
     
}



export function disabledBlack() {
    const black=document.querySelectorAll('.check-black');
    const crown=document.querySelectorAll('.black-crown');
  black.forEach(el=>{
      if (el.classList.contains('disabled')) {
        el.classList.remove('disabled')
      } else{
        el.classList.add('disabled')
      }
  })
   if(crown){
    crown.forEach(el=>{
      if (el.classList.contains('disabled')) {
        el.classList.remove('disabled')
      } else{
        el.classList.add('disabled')
      }
  })
   }
    
}

export function blackSelfDisabled(){
  const crown=document.querySelectorAll('.black-crown');
  const black=document.querySelectorAll('.check-black');
  black.forEach(el=>{if(!el.classList.contains('disabled')){
  el.classList.add('disabled');
  }});

  if(crown){
    crown.forEach(el=>{if(!el.classList.contains('disabled')){
      el.classList.add('disabled');
      }})
   }
}

export function whiteSelfDisabled(){
  const white=document.querySelectorAll('.check-white');
  const crown=document.querySelectorAll('.white-crown');
  white.forEach(el=>{
    if(!el.classList.contains('disabled')){
      el.classList.add('disabled');
    }
  })
  if (crown) {
    crown.forEach(el=>{
      if(!el.classList.contains('disabled')){
        el.classList.add('disabled');
      }
    })
  }
}

 

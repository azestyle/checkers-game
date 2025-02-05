import { generateTable } from './table/table.js';
import { loop } from './loop/loop.js';
import {  disabledBlack } from './game rules/rules.js';


const wrapper=document.querySelector('.wrapper');
const modal=document.querySelector('.modal');
const start=document.querySelector('.play-btn');
const game=document.querySelector('#game');
start.addEventListener('click',()=>{
generateTable();
loop();
disabledBlack();
modal.classList.add('d-none');
wrapper.classList.remove('d-none');
game.play()
})

// winnerWhite()

// export function reduce(){
//     let count=0
//     return ()=>{
//         return console.log(++count);
        
//     }
// }
//  export let testi=reduce()



// document.addEventListener('DOMContentLoaded',()=>{
// generateTable();
// loop();
// disabledBlack();
// wrapper.classList.remove('d-none');

// })



// window.addEventListener('click', () => {
   
//     const music = document.querySelector('#background-music')
//     console.log(music);
//     music.play();    
//     },{once:true});        
  
  
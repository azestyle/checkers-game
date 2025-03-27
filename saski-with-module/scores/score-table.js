
export function addWhite(){
 bonusController()
const white=document.querySelector('.white-score');
const addStone=document.createElement('div');
addStone.classList.add('black-loser');
white.append(addStone);
const total=white.querySelectorAll('.black-loser').length
if(total===12){
    setTimeout(()=>{
        winnerWhite();
    },1000)
}

}
export function addBlack(){
 bonusController()
const black=document.querySelector('.black-score');
const addStone=document.createElement('div');
addStone.classList.add('white-loser');
black.append(addStone);
const total=black.querySelectorAll('.white-loser').length
if(total===12){
    setTimeout(()=>{
        winnerBlack();
    },1000)
}
}


export function winnerWhite(){
    const body=document.querySelector('body')
    const WinModal=document.createElement('div');
    WinModal.classList.add('winner-modal');
    body.append(WinModal);
    const animationBox=document.createElement('div');
    animationBox.classList.add('animated');
    WinModal.append(animationBox);
    const txtOne=document.createElement('h1');
    txtOne.classList.add('txt-one');
    txtOne.textContent='WHITE';
    const txtTwo=document.createElement('h2');
    txtTwo.textContent='WIN';
    txtTwo.classList.add('txt-two');
    const winner=document.querySelector('#winner');
    winner.play();
    animationBox.append(txtOne,txtTwo);
    reStartProccessing(animationBox);
}
export function winnerBlack(){
    const body=document.querySelector('body')
    const WinModal=document.createElement('div');
    WinModal.classList.add('winner-modal');
    body.append(WinModal);
    const animationBox=document.createElement('div');
    animationBox.classList.add('animated');
    WinModal.append(animationBox);
    const txtOne=document.createElement('h1');
    txtOne.classList.add('txt-three');
    txtOne.textContent='BLACK';
    const txtTwo=document.createElement('h2');
    txtTwo.textContent='WIN';
    txtTwo.classList.add('txt-four');
    animationBox.append(txtOne,txtTwo);
    const winner=document.querySelector('#winner');
    winner.play();    
    animationBox.append(txtOne,txtTwo);
    reStartProccessing(animationBox);    
    
    

}


export function clicked(){
    const clicked=document.querySelector('#clicked');
    clicked.play()
}
export function mowie(){
    const movies=document.querySelector('#movied');
    movies.play();
}


function bonusController(){
const bonus=document.querySelector('#bonus');
if(bonus.play()){
    bonus.pause();
    bonus.currentTime = 0;
}
bonus.play();
}

export function transform(){
    const transform=document.querySelector('#crown');
    transform.play();
}


function reStartProccessing(animationBox){
    const restartBox=document.createElement('div');
    restartBox.classList.add('restart-box');
    const reStart=document.createElement('button');
    reStart.classList.add('restart');
    reStart.textContent='RESTART'
    restartBox.append(reStart);
    animationBox.append(restartBox);
        document.querySelector(".restart").addEventListener("click", function () {
        location.reload();
      });
}
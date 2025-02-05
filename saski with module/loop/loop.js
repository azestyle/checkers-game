import { whiteMowieStarter } from '../white-black movie/whitemovie.js';
import { blackMowieStarter } from '../white-black movie/blackmovie.js';


export function loop() {
    const getRow = document.querySelectorAll(".row");
    whiteMowieStarter(getRow);
    blackMowieStarter(getRow);
  }
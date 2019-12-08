import { Component } from '@angular/core';

let number = Math.floor(Math.random() * 10) + 1;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
  }

  buttonOne() {
    const clicked = 1;
    if(clicked === number){
      alert(`you win!`);
    }
    else{
      alert(`try again`);
    }
  }
}

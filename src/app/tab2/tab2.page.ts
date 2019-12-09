import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';

let number = 1;
// Math.floor(Math.random() * 10) + 1;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private dialogs: Dialogs) { }

  buttonOne() {
    const clicked = 1;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      alert(`Incorrect, try again!`);
    }
  }
}

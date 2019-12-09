import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';

let number = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

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
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonTwo() {
    const clicked = 2;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonThree() {
    const clicked = 3;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonFour() {
    const clicked = 4;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonFive() {
    const clicked = 5;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonSix() {
    const clicked = 6;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonSeven() {
    const clicked = 7;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonEight() {
    const clicked = 8;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonNine() {
    const clicked = 9;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }

  buttonTen() {
    const clicked = 10;
    if(clicked === number){
      this.dialogs.confirm('Play Again?', 'You won by selecting' + number + 'after' + guesses + 'guesses!', ['Yes', 'No'])
        .then((buttonIndex) => {
          if (buttonIndex === 1) {
            location.reload();
          }
        })
        .catch(e => console.log('Error displaying dialog', e));
    }
    else{
      this.dialogs.alert(`Incorrect, try again!`);
      guesses += 1;
    }
  }
}

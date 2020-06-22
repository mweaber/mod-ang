import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  typedText: string = '';

  onChange(value: string) {
    console.log(value)

    this.typedText = value
  }

  compare(randomLetter:string, enteredLetter:string){
    if (!enteredLetter) {
      return 'pending'
    } 

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }

  getNew(){
    this.randomText = lorem.sentence();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputvalue="";

  myFunction(input){
    if(input=='='){
      this.inputvalue=eval(this.inputvalue)
    }else{
      this.inputvalue+=input
    }
    
   console.log(input)
  }
}

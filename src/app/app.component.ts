import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count = 0;

  handleIncrease = () =>{
    if(this.count<3)
      this.count = this.count+1;
  }

  handleDecrease = ()=> {
    if(this.count<=-3){

    }else{
    this.count = this.count-1;
    }
  }

  handleReset = () => {
    this.count=0;
  }



}

import { Component } from '@angular/core';
import { FirstComponent } from 'src/app/admin/first/first.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  dummyComponent!: any;

  assignComponent(component: string){
    if(component=='first'){
      this.dummyComponent= FirstComponent;
    }
  }
}

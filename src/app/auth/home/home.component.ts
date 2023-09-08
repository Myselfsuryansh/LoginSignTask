import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){

  }
  clearLocalStorage(): void {
    localStorage.clear();
    console.log('Local Storage Cleared!');
  }

}

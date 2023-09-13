import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenavbars',
  templateUrl: './sidenavbars.component.html',
  styleUrls: ['./sidenavbars.component.css']
})
export class SidenavbarsComponent {
  showSideNav:any;
  constructor(private router:Router){
    router.events.subscribe(event=>{
      if(router.url=='sidebardetails'){
        this.showSideNav = true;
      }
    })
  }

}

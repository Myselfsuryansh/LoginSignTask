import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 constructor(private service: ApiserviceService){
  this.service.posts().subscribe((data)=>{
    this.posts=data
  })
 }
 posts:any
  ngOnInit(){
    for(let i=1;i<=500;i++){
      this.post.push(i)
    }
    console.log(this.post)
  }

  post : any=[]

  onScroll(){
    const length = this.post.length
    setTimeout(()=>{
      const p:any =''.repeat(100).split('').map((s:any,i)=>i+1+length);
      while(p.length)
      this.post.push(p.shift())
    },1000)
  }

}

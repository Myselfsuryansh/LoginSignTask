import { Component, OnInit } from '@angular/core';
export interface AutocompleteModel{
  value:any
  display:string
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent  implements OnInit{

  public items=[
    {
      display:'Angular',
      value:1
    },
    {
      display:'React',
      value:2
    },
    {
      display:'Vue',
      value:3
    },
    {
      display:'Php',
      value:4
    },
    {
      display:'Html',
      value:5
    },
    {
      display:'Python',
      value:6
    }
  ]

ngOnInit(): void {
  
}
}

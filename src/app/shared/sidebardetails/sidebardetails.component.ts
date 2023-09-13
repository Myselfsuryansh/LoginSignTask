import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebardetails',
  templateUrl: './sidebardetails.component.html',
  styleUrls: ['./sidebardetails.component.css']
})
export class SidebardetailsComponent implements OnInit  {
  item: any;
  id!: number;

  constructor(private route :ActivatedRoute,private http: HttpClient){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];  
      console.log(this.id)
      this.fetchItem();
    });
    
  }
  fetchItem(): void {
    this.http.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`).subscribe(data => {
      this.item = data;
    });
  }

}

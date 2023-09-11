import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  datapatch:any
  profileForm!: FormGroup;
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings = {};
  constructor(private fb: FormBuilder,private toastr: ToastrService) {}
  ngOnInit() {
    this.profileForm = this.fb.group({
      selectedItems: [[]]
    });

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSave() {
    this.datapatch = this.profileForm.value
    
  }
  onEdit() {
      this.profileForm.patchValue({
        selectedItems:[{item_id:1,item_name:'Angular'},
        {item_id: 2, item_name: 'React'},
        {item_id:3,item_name:'Vue'}
    ]
    })
  }

}

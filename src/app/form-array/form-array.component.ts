import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form!: FormGroup;


  constructor(private fb:FormBuilder){
    this.form= this.fb.group({
      items: this.fb.array([])
    });
  }

  get items(){
    return this.form.get('items') as FormArray

  }
  addItem() {
    this.items.push(this.fb.control(''));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

}

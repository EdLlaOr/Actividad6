import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavHeadComponent } from "../../component/nav-head/nav-head.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [ReactiveFormsModule, NavHeadComponent]
})


export class FormComponent {
  typeForm:string = 'NUEVO'
  usersForm: FormGroup

  constructor(){
    this.usersForm = new FormGroup({

    })
  }

  getDataForm(){
    console.log(this.usersForm.value)
  }
}

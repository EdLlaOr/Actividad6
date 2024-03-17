import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavHeadComponent } from "../../component/nav-head/nav-head.component";
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [ReactiveFormsModule, NavHeadComponent]
})



export class FormComponent {

  usersService = inject (UsersService)
  typeForm:string = 'NUEVO'
  typeBtn:string = 'Guardar'
  usersForm: FormGroup
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor(){
    this.usersForm = new FormGroup({
      last_name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      first_name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      // Por si alguien se llama/apellida Ed o Al
      email : new FormControl('',[Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,30}$/)]), 
      // le doy en el dominio hasta 30 para que me deje actualizar los usuarios que vienen en la API, cuyo email 
      // tienen el dominio 'peticiones.online'
      image: new FormControl('',[Validators.required, Validators.pattern(/^(http[s]?:\/\/)/)])
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async (queryParams: any) => {
      if (queryParams) {
        //Actualizando
        const response = await this.usersService.getById(queryParams[0])
        if (response._id){
          this.typeForm = 'ACTUALIZAR'
          this.typeBtn = 'Actualizar'
        }else{
          this.typeForm = 'NUEVO'
          this.typeBtn = 'Guardar'
        }
        this.usersForm = new FormGroup({
          _id: new FormControl(response._id),
          last_name: new FormControl(response.last_name, [Validators.required, Validators.minLength(2)]),
          first_name: new FormControl(response.first_name, [Validators.required, Validators.minLength(2)]),
          // Por si alguien se llama/apellida Ed o Al
          username: new FormControl(response.username, []),
          email: new FormControl(response.email, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,30}$/)]),
          // le doy en el dominio hasta 30 para que me deje actualizar los usuarios que vienen en la API, cuyo email 
        // tienen el dominio 'peticiones.online'
          image: new FormControl(response.image, [Validators.required, Validators.pattern(/^(http[s]?:\/\/)/)]),
          password: new FormControl(response.password, []),
        }, [])
      }
    })
  }
    
    async getDataForm() {
    if (this.usersForm.value._id) {
      //actualizando
      const response = await this.usersService.upDateUser(this.usersForm.value)
      if (response.id) {
        alert(`El usuario ${response.first_name} ${response.last_name} se ha actualizado correctamente`)
        this.router.navigate(['/users'])
      }
      else {
        alert('Ha habido un problema intentalo de nuevo')
      }
      

    } else {
      //insertar
      const response = await this.usersService.newUser(this.usersForm.value)
      if (response.id) {
        alert(`El usuario ${response.first_name} ${response.last_name} se ha añadido correctamente`)
        this.router.navigate(['/users'])
        } else {
        alert('Ha habido un problema intentalo de nuevo')
      }

    }

  }
}


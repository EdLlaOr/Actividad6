import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-all-buttons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-buttons.component.html',
  styleUrl: './all-buttons.component.css'
})
export class AllButtonsComponent {

  @Input() parent:string=""
  @Input() _idUser:string=""
  @Input() idUser?:number

  usersService = inject(UsersService)

  async delUser(id:string){

    Swal.fire({
      title: "¿Estas seguro?",
      text: "El borrado no se revertirá",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ¡estoy seguro!"
    }).then((result) => {
      if (result.isConfirmed) {
        let response= this.usersService.delUser(id)
        Swal.fire({
          title: "¡Borrado!",
          text: "El usuario se ha borrado.",
          icon: "success"
        })
      }else{
        Swal.fire("¡No se ha borrado! El usuario no existe."
      )
  }})
  
  }
}

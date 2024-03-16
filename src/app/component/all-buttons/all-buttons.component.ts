import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

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
    let confirmation = confirm('Seguro que quiere borrar el usuario '+ this.idUser)
    if(confirmation){
      let response=await this.usersService.delUser(id)
      if (response._id){
        alert('Se ha borrado correctamente el usuario '+response.id)
      }else{
        alert('El usuario que intentas borrar no existe')
      }
      
    }  
  }
}

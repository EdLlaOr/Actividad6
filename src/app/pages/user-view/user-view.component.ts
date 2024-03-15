import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})

export class UserViewComponent {

  activatedRoute = inject (ActivatedRoute) 
  anUser !: IUser;
  usersService = inject (UsersService)

  ngOnInit() : void{
    this.activatedRoute.params.subscribe(async (params:any) =>{
      console.log(params)
      const res = params.id
      
      let response = await this.usersService.getById(res)
      this.anUser = response
      
    })
  }
   
}

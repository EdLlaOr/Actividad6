import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { NavHeadComponent } from "../../component/nav-head/nav-head.component";
import { AllButtonsComponent } from "../../component/all-buttons/all-buttons.component";


@Component({
    selector: 'app-user-view',
    standalone: true,
    templateUrl: './user-view.component.html',
    styleUrl: './user-view.component.css',
    imports: [RouterLink, NavHeadComponent, AllButtonsComponent]
})

export class UserViewComponent {

  activatedRoute = inject (ActivatedRoute) 
  anUser !: IUser;
  usersService = inject (UsersService)

  ngOnInit() : void{
    this.activatedRoute.queryParams.subscribe(async(queryParams:any)=>{
      const _id=queryParams[0]    
      this.anUser = await this.usersService.getById(_id)
    })
      
  }
 }
   


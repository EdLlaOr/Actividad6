import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from "../../component/user-card/user-card.component";

@Component({
    selector: 'app-users-list-view',
    standalone: true,
    templateUrl: './users-list-view.component.html',
    styleUrl: './users-list-view.component.css',
    imports: [ UserCardComponent]
})
export class UsersListViewComponent {
  usersServices = inject(UsersService)
  pageView:number = 1
  perPage: number = 8
  arrUsersView: IUser[] = []

  async ngOnInit(): Promise<void>{
    const response = await this.usersServices.getAll()
    const arrUsers = response.results
    let finishCard = this.pageView*this.perPage;
    let initCard = finishCard-this.perPage; 
    this.arrUsersView = response.results.slice(initCard,finishCard)
  }
}

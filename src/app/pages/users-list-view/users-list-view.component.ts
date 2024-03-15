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
  pageView:number = 1 //pagina de vista de UsersListView inicial
  perPage: number = 8 //constante de elementos users cards por vista
  arrUsersView: IUser[] = []

  async ngOnInit(): Promise<void>{
    const response = await this.usersServices.getAll()
    const arrUsers = response.results
    let finishCard = this.pageView*this.perPage;
    let initCard = finishCard-this.perPage; 
    this.arrUsersView = response.results.slice(initCard,finishCard)
    
  }

  async pageUp(){
    this.pageView ++
    const response = await this.usersServices.getAll()
      const arrUsers = response.results
      let finishCard = this.pageView*this.perPage;
      let initCard = finishCard-this.perPage; 
      if(response.results.slice(initCard,finishCard).length>0){
        this.arrUsersView = response.results.slice(initCard,finishCard)
      }else{
        this.pageView--
      }
      
  }

  async pageDown(){
    if (this.pageView>1){
      this.pageView --
      const response = await this.usersServices.getAll()
      const arrUsers = response.results
      let finishCard = this.pageView*this.perPage;
      let initCard = finishCard-this.perPage; 
      this.arrUsersView = response.results.slice(initCard,finishCard) 
    
    }
  }


}

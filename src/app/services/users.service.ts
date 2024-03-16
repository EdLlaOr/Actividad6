import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.interface';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/users'

  getAll():Promise<IResponse>{
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl))
    
  }

  getById(id:string):Promise<IUser>{
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${id}`))
  }

  
  delUser(id:string):Promise<IUser>{
    return lastValueFrom(this.httpClient.delete<IUser>(`${this.baseUrl}/${id}`))
  }

  arrOrdered(arrUsers:IUser[]){
    return arrUsers.sort((a:IUser,b:IUser):any=>{
      if(a.id>b.id){
        return 1
      }else return -1
    })
  }

  newUser(formValue:IUser):Promise<IUser>{
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl,formValue))
  }

  upDateUser(formValue:IUser):Promise<IUser>{
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseUrl}/${formValue._id}`,formValue))
  }

}

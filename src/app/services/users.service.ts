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
  



}

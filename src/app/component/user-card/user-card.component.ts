import { Component, Input } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUser!:IUser;

}
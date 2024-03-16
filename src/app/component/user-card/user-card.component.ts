import { Component, Input } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { AllButtonsComponent } from "../all-buttons/all-buttons.component";

@Component({
    selector: 'app-user-card',
    standalone: true,
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css',
    imports: [RouterLink, AllButtonsComponent]
})
export class UserCardComponent {
  @Input() miUser!:IUser;

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-head',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-head.component.html',
  styleUrl: './nav-head.component.css'
})
export class NavHeadComponent {

}

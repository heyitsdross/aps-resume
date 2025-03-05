import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'intro',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
}

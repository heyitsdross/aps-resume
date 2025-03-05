import { Component } from '@angular/core';
import {EmploymentWishlistComponent} from "../employment-wishlist/employment-wishlist.component";
import {EmployeeSkillsComponent} from "../employee-skills/employee-skills.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    EmploymentWishlistComponent,
    EmployeeSkillsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

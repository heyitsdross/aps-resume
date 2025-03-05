import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import availability from "../../assets/data/availability.json";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

enum WorkType {
  OFFICE = 'office',
  HYBRID = 'hybrid',
  REMOTE = 'remote'
}

interface EmploymentAvailability {
  code: string;
  title: string;
  styleClass: string;
  availability: boolean;
  reason: string;
  locations?: Array<string>;
  workTypes: Array<string>;
}

@Component({
  selector: 'employment-wishlist',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgClass,
    NgForOf,
    MatCardSubtitle,
    NgIf,
    MatCardFooter,
    MatIcon,
    MatTooltip
  ],
  templateUrl: './employment-wishlist.component.html',
  styleUrl: './employment-wishlist.component.scss'
})
export class EmploymentWishlistComponent {

  protected readonly availableLocations: Array<EmploymentAvailability> = availability;
  protected readonly WorkType = WorkType;
}

import {Component, Input} from '@angular/core';
import {JobPositionInfo} from "../model/job-position-info.model";
import jobHistory from '../../assets/data/job-history.json';
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'job-history',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './job-history.component.html',
  styleUrl: './job-history.component.scss'
})
export class JobHistoryComponent {

  @Input()
  jobPositions: Array<JobPositionInfo>;

  constructor() {
    this.jobPositions = jobHistory as Array<JobPositionInfo>;
  }
}

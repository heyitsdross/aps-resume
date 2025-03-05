import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {JobHistoryComponent} from "./job-history/job-history.component";
import {DatePipe} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {IntroComponent} from "../intro/intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobHistoryComponent, NavigationComponent, DatePipe, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly JobHistoryComponent = JobHistoryComponent;
  protected readonly IntroComponent = IntroComponent;
}

import {Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {JobHistoryComponent} from "./job-history/job-history.component";
import {IntroComponent} from "../intro/intro.component";

export const routes: Routes = [
    {path: '', component: IntroComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'history', component: JobHistoryComponent}
];

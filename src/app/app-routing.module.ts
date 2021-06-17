import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { InsightsComponent } from './assignments/insights/insights.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { HistoryComponent } from './history/history.component';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'map', component: MapComponent },
  { path: 'users', component: UsersComponent },
  { path: 'course', component: CourseComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'assignments/insights', component: InsightsComponent },
  { path: '', component: AboutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

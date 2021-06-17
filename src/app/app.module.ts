import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { MapComponent } from './map/map.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { CourseComponent } from './course/course.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { InsightsComponent } from './assignments/insights/insights.component';
import { InsightsTitleComponent } from './assignments/insights/insights-title/insights-title.component';
import { InsightsBodyComponent } from './assignments/insights/insights-body/insights-body.component';
import { InsightsPeopleComponent } from './assignments/insights/insights-people/insights-people.component';
import { InsightsTopicComponent } from './assignments/insights/insights-topic/insights-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    ContactComponent,
    HistoryComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    CourseComponent,
    AssignmentsComponent,
    InsightsComponent,
    InsightsTitleComponent,
    InsightsBodyComponent,
    InsightsPeopleComponent,
    InsightsTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FirebaseConfig
import { environment } from 'src/environments/environment';

// Firestore
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Angular FireModule
import { AngularFireModule } from 'angularfire2';

// Service
import { CourseService } from 'src/app/services/course.service';

// Forms
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.FirebaseConfig, 'completeAngularCrud'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';

// Firebase
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

// Interface
import { courseInterface } from 'src/app/models/courseInterface';

// Observable
import { Observable } from 'rxjs';

// Map
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseCollection: AngularFirestoreCollection<courseInterface>;
  courses: Observable<courseInterface[]>;
  courseDoc: AngularFirestoreDocument<courseInterface>;

  constructor(public afs: AngularFirestore) { 
    this.courseCollection = afs.collection<courseInterface>('courses', ref => ref.orderBy('date','desc'));
    this.courses = this.courseCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as courseInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getCourses(){
    return this.courses;
  }

  addCourse(coursesInterface: courseInterface){
    this.courseCollection.add(coursesInterface);
  }

  deleteCourse(course: courseInterface){
    this.courseDoc = this.afs.doc(`courses/${course.id}`);
    this.courseDoc.delete();
  }

  updateCourse(course: courseInterface){
    this.courseDoc = this.afs.doc(`courses/${course.id}`);
    this.courseDoc.update(course);
  }

}

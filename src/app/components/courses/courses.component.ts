import { Component, OnInit } from '@angular/core';

// Interface
import { courseInterface } from 'src/app/models/courseInterface';

// Service
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList: courseInterface[];
  editState: boolean = false;
  courseToEdit: courseInterface;

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courseList = courses;
    });
  }

  editCourse(course: courseInterface){
    this.editState = true;
    this.courseToEdit = course;
    return false;
  }

  updateCourse(course: courseInterface){
    this.courseService.updateCourse(course);
    this.clearState();
  }

  deleteCourse(course: courseInterface){
    this.courseService.deleteCourse(course);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.courseToEdit = null;
    return false;
  }

}
import { Component, OnInit } from '@angular/core';

// Service
import { CourseService } from 'src/app/services/course.service';

// Interface
import { courseInterface } from 'src/app/models/courseInterface';

// Form
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: courseInterface = {
    name: '',
    teacher: '',
    price: '',
    technology: '',
    language: '',
    date: 0,
    description: ''
  };

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.valid === true){
      const dateNow = Date.now();
      this.course.date = dateNow;
      this.courseService.addCourse(this.course);
      form.resetForm();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Course, CourseUpdateDto } from "./models/Course";
import {CourseRegisterDto, CourseService} from "../../../@api/STA";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule
  ],
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['id', 'title', 'actions'];

  courseForm: FormGroup;
  isEditMode = false;

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.courseForm = this.fb.group({
      id: [null],
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.apiCourseGet().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        this.showNotification('Error fetching courses');
        console.error('Error fetching courses', err);
      }
    });
  }

  submitForm() {
    if (!this.courseForm.valid) return;

    if (this.isEditMode) {
      this.updateCourse();
    } else {
      this.addCourse();
    }
  }

  addCourse() {
    const newCourse: CourseRegisterDto = {
      title: this.courseForm.value.title
    };

    this.courseService.apiCoursePost(newCourse).subscribe({
      next: () => {
        this.loadCourses();
        this.resetForm();
        this.showNotification('Course added successfully');
      },
      error: (err) => {
        this.showNotification('Error adding course');
        console.error('Error adding course', err);
      }
    });
  }

  editCourse(course: Course) {
    this.isEditMode = true;
    this.courseForm.setValue({
      id: course.id,
      title: course.title
    });
  }

  updateCourse() {
    if (this.courseForm.value.id == null) {
      this.showNotification('No course ID specified for update');
      return;
    }

    const updateDto: CourseUpdateDto = {
      id: this.courseForm.value.id,
      title: this.courseForm.value.title
    };

    this.courseService.apiCoursePut(updateDto).subscribe({
      next: () => {
        this.loadCourses();
        this.resetForm();
        this.showNotification('Course updated successfully');
      },
      error: (err) => {
        this.showNotification('Error updating course');
        console.error('Error updating course', err);
      }
    });
  }

  deleteCourse(id: number | undefined) {
    if (!id) return;

    if (!confirm('Are you sure you want to delete this course?')) return;

    this.courseService.apiCourseDelete(id).subscribe({
      next: () => {
        this.loadCourses();
        this.showNotification('Course deleted successfully');
      },
      error: (err) => {
        this.showNotification('Error deleting course');
        console.error('Error deleting course', err);
      }
    });
  }

  resetForm() {
    this.isEditMode = false;
    this.courseForm.reset({ id: null, title: '' });
  }

  private showNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}

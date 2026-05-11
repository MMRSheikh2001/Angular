import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeacherModel } from '../../../model/teacher.model';
import { TeacherService } from '../../../services/teacher.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DepartmentModel } from '../../../model/department.model';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-list-teacher',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-teacher.html',
  styleUrl: './list-teacher.css',
})
export class ListTeacher implements OnInit {
  teachers: TeacherModel[] = [];
  departments: DepartmentModel[] = [];

  constructor(
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef,
    private depService: DepartmentService
  ) { }


  ngOnInit(): void {

    this.loadAllTeacher();
    this.loadAllDep();
  }
  loadAllTeacher() {
    this.teacherService.getAllTeacher().subscribe(
      {
        next: (data) => {
          this.teachers = data;
          this.cdr.markForCheck();
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      }
    )
  }
  remove(id: string) {
    this.teacherService.deleteTeacher(id).subscribe(
      {
        next: () => {
          console.log("Teacher Deleted");
        }, error: (err) => {
          console.log(err);
        }
      }
    )
  }

  //Get Department Name from given id

  loadAllDep() {
    this.depService.getAllDep().subscribe(
      {
        next: (data) => {
          this.departments = data;
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      }
    )
  }
  getDepName(depId: string): string {
    const dep = this.departments.find(d => d.id == depId)
    return dep ? dep.name : 'No Department';
  }

}

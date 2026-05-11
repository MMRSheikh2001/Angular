import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { DepartmentService } from '../../../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from '../../../model/department.model';
import { TeacherModel } from '../../../model/teacher.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-teacher.html',
  styleUrl: './add-teacher.css',
})
export class AddTeacher implements OnInit {
  departments: DepartmentModel[] = [];

  teacher: TeacherModel = { name: '', email: '', designation: '', cell: '', departmentId: '' };
  isEditMode = false;


  constructor(
    private teacherService: TeacherService,
    private depService: DepartmentService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.loadAllDep();
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.teacherService.getById(id).subscribe(
        {
          next: (data) => {
            this.teacher = data;
            this.cdr.markForCheck();
          }, error: (err) => {
            console.log(err);
          }
        }
      )
    }


  }

  loadAllDep() {
    this.depService.getAllDep().subscribe(
      {
        next: (data) => {
          this.departments = data;
          this.cdr.markForCheck();
          console.log(data)
        }, error: (err) => {
          console.log(err);
        }
      }
    )
  }


  save() {
    if (this.isEditMode) {
      this.teacherService.updateTeacher(this.teacher).subscribe(
        {
          next: () => {
            console.log("Teacher Updated");
            this.goBack();
          },
          error: (err) => {
            console.log(err);
          }

        }
      )
    } else {


      this.teacherService.saveTeacher(this.teacher).subscribe(
        {
          next: () => {
            console.log("Teacher Saved");
            this.goBack();
          },
          error: (err) => {
            console.log(err);
          }

        }
      )
    }
  }


  goBack() {
    this.router.navigate(['/allTeacher']);
  }

}

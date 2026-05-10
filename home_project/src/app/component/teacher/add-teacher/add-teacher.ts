import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { DepartmentService } from '../../../services/department.service';
import { Router } from '@angular/router';
import { DepartmentModel } from '../../../model/department.model';
import { TeacherModel } from '../../../model/teacher.model';

@Component({
  selector: 'app-add-teacher',
  imports: [],
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
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loadAllDep();
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


goBack(){
  this.router.navigate(['/allTeacher']);
}

}

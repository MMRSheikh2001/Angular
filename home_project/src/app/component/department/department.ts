import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../model/department.model';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  imports: [CommonModule, FormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {
  departments: DepartmentModel[] = [];
  department: DepartmentModel = { name: '', email: '' };
  isEditMode: boolean = false;

  constructor(
    private depService: DepartmentService,
    private cdr: ChangeDetectorRef
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
  saveDepartment() {
    if (this.isEditMode) {
      //Update
      this.depService.updateDepartment(this.department).subscribe(
        {
          next: () => {
            this.loadAllDep();
            this.resetForm();
          }, error: (err) => {
            console.log(err);
          }
        }
      )
    }
    else {
      //save
      this.depService.saveDepartment(this.department).subscribe(
        {
          next: () => {
            this.loadAllDep();
            this.resetForm();
          }, error: (err) => {
            console.log(err)
          }
        }
      )

    }

  }


  //Edit (Send data into Form)
  editDepartment(dep: DepartmentModel) {
    this.department = { ...dep };
    this.isEditMode = true;
  }

  //Delete
  deleteDepartment(id: string) {
    if (confirm("Are You sure to Delete?")) {
      this.depService.deleteDepartment(id).subscribe(
        {
          next: () => {
            this.loadAllDep();
          }, error: (err) => {
            console.log(err)
          }
        }
      )
    }
  }




  resetForm() {
    this.department = { id: '', name: '', email: '' };
    this.isEditMode = false;
  }


}

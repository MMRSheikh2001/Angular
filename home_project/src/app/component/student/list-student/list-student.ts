import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { StudentModel } from '../../../model/student.model';

@Component({
  selector: 'app-list-student',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})
export class ListStudent implements OnInit {
  students: StudentModel[] = [];

  constructor(private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.loadAllStudents();
  }
  loadAllStudents() {
    this.studentService.getAllStudents().subscribe(
      {
        next: (data) => {
          this.students = data;
          this.cdr.markForCheck();
          console.log(this.students)
        },
        error: (err) => {
          console.log(err);
        }




      }

    )
  }

}

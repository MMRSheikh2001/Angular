import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-student',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})
export class ListStudent implements OnInit {
  ngOnInit(): void {
    this.loadAllStudents();
  }
  loadAllStudents() {

  }

}

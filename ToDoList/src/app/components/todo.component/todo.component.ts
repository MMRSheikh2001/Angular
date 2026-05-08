import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';

@Component({
  selector: 'app-todo.component',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
todos:ToDo[]=[];
constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}

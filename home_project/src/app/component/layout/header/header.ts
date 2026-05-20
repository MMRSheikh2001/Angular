import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {


  loggedUser: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    //Listen for login or Logout Changes


  }


}

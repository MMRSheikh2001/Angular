
import { Routes } from '@angular/router';
import { Home } from './component/layout/home/home';
import { ListStudent } from './component/student/list-student/list-student';
import { AddEditStudent } from './component/student/add-edit-student/add-edit-student';
import { Department } from './component/department/department';
import { AddTeacher } from './component/teacher/add-teacher/add-teacher';
import { ListTeacher } from './component/teacher/list-teacher/list-teacher';
import { Register } from './component/register/register';
import { Login } from './component/login/login';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'students', component: ListStudent },
    { path: 'edit/:id', component: AddEditStudent },
    { path: 'add', component: AddEditStudent },
    { path: 'department', component: Department },
    { path: 'addTeacher', component: AddTeacher },
    { path: 'editTeacher/:id', component: AddTeacher },
    { path: 'allTeacher', component: ListTeacher },
    { path: 'register', component: Register },
    { path: 'login', component: Login }
];

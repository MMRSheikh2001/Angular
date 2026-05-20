
import { Routes } from '@angular/router';
import { Home } from './component/layout/home/home';
import { ListStudent } from './component/student/list-student/list-student';
import { AddEditStudent } from './component/student/add-edit-student/add-edit-student';
import { Department } from './component/department/department';
import { AddTeacher } from './component/teacher/add-teacher/add-teacher';
import { ListTeacher } from './component/teacher/list-teacher/list-teacher';
import { Register } from './component/register/register';
import { Login } from './component/login/login';
import { Profile } from './component/profile/profile';
import { guardsGuard } from './guards/guards-guard';
import { ProfileAdmin } from './component/profile/profile-admin/profile-admin';
import { ProfileTeacher } from './component/profile/profile-teacher/profile-teacher';
import { ProfileStudent } from './component/profile/profile-student/profile-student';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'students', component: ListStudent },
    { path: 'edit/:id', component: AddEditStudent, canActivate: [guardsGuard], data: { role: 'admin' } },
    { path: 'add', component: AddEditStudent },
    { path: 'department', component: Department },
    { path: 'addTeacher', component: AddTeacher },
    { path: 'editTeacher/:id', component: AddTeacher },
    { path: 'allTeacher', component: ListTeacher },
    { path: 'register', component: Register },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile },
    { path: 'profile-admin', component: ProfileAdmin , canActivate: [guardsGuard], data: { role: 'admin' }},
    { path: 'profile-teacher', component: ProfileTeacher, canActivate: [guardsGuard], data: { role: 'teacher' } },
    { path: 'profile-student', component: ProfileStudent , canActivate: [guardsGuard], data: { role: 'student' }}
];

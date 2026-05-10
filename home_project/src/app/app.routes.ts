
import { Routes } from '@angular/router';
import { Home } from './component/layout/home/home';
import { ListStudent } from './component/student/list-student/list-student';
import { AddEditStudent } from './component/student/add-edit-student/add-edit-student';
import { Department } from './component/department/department';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'students', component: ListStudent },
    { path: 'edit/:id', component: AddEditStudent },
    { path: 'add', component: AddEditStudent },
    { path: 'department', component: Department }
];

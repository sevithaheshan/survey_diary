import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { TodoComponent } from './todo/todo.component';
import { WorkdoneComponent } from './workdone/workdone.component';

const routes: Routes = [
  {path:' ', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'singup', component:SingupComponent},
  {path:'head', component:HeadComponent},
  {path:'addnewtask', component:AddnewtaskComponent},
  {path:'workdone', component:WorkdoneComponent},
  {path:'todo', component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component,Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppServiceService } from '../app-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [LoginComponent]
})
export class HeadComponent implements OnInit{
  
  userLogged: any;
  usersLogin: any;
  constructor(private http: HttpClient, private router: Router, private service: AppServiceService , private utilize: LoginComponent){}
  ngOnInit(){
    this.userLogged = this.utilize.Name;
  }

  confirmBox(){
    Swal.fire("Logout");
    this.router.navigate(['login'])  
  }

  convertNext(){
    Swal.fire("Reset Data")
    this.router.navigate(['head'])
  }

  update(){
    this.service.getProjectData(Object).subscribe(
      res => { console.log(res)  })
      this.router.navigate(['todo']);
  }

  
}

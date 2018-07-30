import { Component, OnInit } from '@angular/core';
import { Employee} from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 employees : Employee[] = [
   {
     id:1,
     name:'Carlos Lafarga',
     gender:'Male',
     contactPreference:'Email',
     email:'carloslafaga22@gmail.com',
     dateOfBirth:new Date('03/22/1988'),
     department:'IT',
     isActive:true,
     photoPath:'assets/images/male.png'
   },
   {
    id:2,
    name:'Vania Lafarga',
    gender:'Female',
    contactPreference:'Email',
    email:'vanialafarga20@gmail.com',
    dateOfBirth:new Date('11/20/1986'),
    department:'RH',
    isActive:true,
    photoPath:'assets/images/female.png'
  },
  {
    id:3,
    name:'Leonor lafarga',
    gender:'Female',
    contactPreference:'Email',
    email:'leonorLafarga20@gmail.com',
    dateOfBirth:new Date('09/20/1990'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/female.png'
  },

 ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import {Department } from '../models/department.model';
import { BsDatepickerConfig } from '../../../node_modules/ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fotoview = false;
  dateOfBirth:Date = new Date(2018,0,30);
  datepickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    {id: 1, name:'IT'},
    {id: 2, name:'ADMIN'},
    {id: 3, name:'CHUY'},
    {id: 4, name:'CHOPIS'}
  ];
  constructor() { 

    this.datepickerConfig = Object.assign({},{
       containerClass:'theme-dark-blue',
       showWeekNumbers:true,
       minDate: new Date(2018,0,30),
       maxDate :new Date(2018,11,31),
       dateInputFormat: 'DD/MM/YYYY'
    });
  }
  previewFoto(){
    this.fotoview = !this.fotoview;
  }

  ngOnInit() {
  }

  saveEmployee(empForm : NgForm) : void{
    console.log(empForm);
  }
}

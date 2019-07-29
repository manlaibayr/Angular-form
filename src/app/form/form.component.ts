import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public data = [];
  public emp = [];
  public current;
  constructor( 
    private employeeService: EmployeeService,
    private dataService: DataService) {}

  ngOnInit() {
    this.employeeService.getResponse().subscribe(data=> this.data = data );
    this.employeeService.getEmployee().subscribe(emp => this.emp = emp);
    this.current = this.emp;
    console.log(this.emp);
  }



  submitted = true;
  
  newEvent(b : NgForm) { 
    console.log(b.value);
    this.dataService.getResponse().subscribe(b.value);
   }

   change(){
     this.submitted = !this.submitted;
   }

}

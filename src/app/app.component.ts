import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'frontend';
  public array = [];
  constructor(private dataService : EmployeeService) {
  
  }
  ngOnInit(){
    this.dataService.getResponse().subscribe( arr => console.log(arr));
  }

}


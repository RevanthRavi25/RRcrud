import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  student:any;
    constructor(private dataService: AppService) {}
  
    ngOnInit(): void {
      this.dataService.fetchData().subscribe(data => { 
        this.student=data
        console.log(data); // Process your data here
      });
    }
  }
  

import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  stud_Id: any="";
  stud_name: any="";
  stud_rolnum: any="";
  stud_birtday: any="";
  student:any;
    constructor(private dataService: AppService) {}
  
    ngOnInit(): void {
    this.readdata()
    }
    readdata(){
      this.dataService.fetchData().subscribe(data => { 
        //  add this.student=data
            this.student=data
            console.log(data); // Process your data here
          });
    };
    onSubmit() {
      this.dataService.addData({   
        StudentId:this.stud_Id,
        Name:this.stud_name,
        Roll:this.stud_rolnum,
        Birthday:this.stud_birtday,
      }).subscribe(
        response => {
          console.log('Data added successfully:', response);
          this.readdata()
          // Handle success - maybe show a success message or reset the form
        },
        error => {
          console.error('Error adding data:', error);
          this.readdata()
          // Handle error - maybe show an error message
        }
      );
    }
  }
  

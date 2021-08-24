import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public title = 'Teachers';
  public selectedTeacher = '';

  public teachers = [
    { id: 1, name: 'Lauro', lastname: 'Green', subject: 'Math'  },
    { id: 2, name: 'Roberta', lastname: 'Blue', subject: 'Physics' },
    { id: 3, name: 'Ronaldo', lastname: 'White', subject: 'English' },
    { id: 4, name: 'Rodrigo', lastname: 'Black', subject: 'Portuguese' },
    { id: 5, name: 'Alexandra', lastname: 'Gray', subject: 'Programming' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = teacher.name;
  }

  back() {
    this.selectedTeacher = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public title = 'Teachers';
  public selectedTeacher: Teacher | undefined;

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

  selectTeacher(teacher: Teacher) {
    this.selectedTeacher = teacher;
  }

  back() {
    this.selectedTeacher = undefined;
  }

}

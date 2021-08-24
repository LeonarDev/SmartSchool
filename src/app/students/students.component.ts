import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  public title = 'Students';

  public students = [
    { name: 'Marta' },
    { name: 'Paula' },
    { name: 'Laura' },
    { name: 'Luiza' },
    { name: 'Luiza' },
    { name: 'Lucas' },
    { name: 'Pedro' },
    { name: 'Paulo' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

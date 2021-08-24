import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public title = 'Teachers';

  public teachers = [
    { name: 'Lauro' },
    { name: 'Roberta' },
    { name: 'Ronaldo' },
    { name: 'Rodrigo' },
    { name: 'Alexandra' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

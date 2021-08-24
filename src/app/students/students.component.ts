import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  public title = 'Students';
  public selectedStudent = '';

  public students = [
    { id: 1, name: 'Marta', lastname: 'Kent', phone: 3223322 },
    { id: 2, name: 'Paula', lastname: 'Machado', phone: 32286753 },
    { id: 3, name: 'Laura', lastname: 'Pausini', phone: 32291567 },
    { id: 4, name: 'Luiza', lastname: 'Mel', phone: 32235788 },
    { id: 5, name: 'Lucas', lastname: 'Lucco', phone: 322336789 },
    { id: 6, name: 'Pedro', lastname: 'Pedra', phone: 32231592 },
    { id: 7, name: 'Paulo', lastname: 'Ricardo', phone: 32231947 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectStudent(student: any) {
    this.selectedStudent = student.name;
  }

  back() {
    this.selectedStudent = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  public studentForm!: FormGroup;
  public title = 'Students';
  public selectedStudent: Student | undefined;
  public textSimple = '';

  public students = [
    { id: 1, name: 'Marta', lastname: 'Kent', phone: '3223322' },
    { id: 2, name: 'Paula', lastname: 'Machado', phone: '32286753' },
    { id: 3, name: 'Laura', lastname: 'Pausini', phone: '32291567' },
    { id: 4, name: 'Luiza', lastname: 'Mel', phone: '32235788' },
    { id: 5, name: 'Lucas', lastname: 'Lucco', phone: '322336789' },
    { id: 6, name: 'Pedro', lastname: 'Pedra', phone: '32231592' },
    { id: 7, name: 'Paulo', lastname: 'Ricardo', phone: '32231947' },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  studentSubmit() {
    console.log(this.studentForm.value);
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
    this.studentForm.patchValue(student);
  }

  back() {
    this.selectedStudent = undefined;
  }

}

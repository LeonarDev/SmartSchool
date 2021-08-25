import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faInfoCircle, faGraduationCap, faUserSlash } from '@fortawesome/free-solid-svg-icons';

import { Student } from '../models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  public modalRef!: BsModalRef;
  public studentForm!: FormGroup;
  public title = 'Students';
  public selectedStudent: Student | undefined;
  public faInfoCircle = faInfoCircle;
  public faGraduationCap = faGraduationCap;
  public faUserSlash = faUserSlash;

  public students = [
    { id: 1, name: 'Marta', lastname: 'Kent', phone: '3223322' },
    { id: 2, name: 'Paula', lastname: 'Machado', phone: '32286753' },
    { id: 3, name: 'Laura', lastname: 'Pausini', phone: '32291567' },
    { id: 4, name: 'Luiza', lastname: 'Mel', phone: '32235788' },
    { id: 5, name: 'Lucas', lastname: 'Lucco', phone: '322336789' },
    { id: 6, name: 'Pedro', lastname: 'Pedra', phone: '32231592' },
    { id: 7, name: 'Paulo', lastname: 'Ricardo', phone: '32231947' },
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit() { }

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

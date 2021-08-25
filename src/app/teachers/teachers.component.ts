import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faInfoCircle, faGraduationCap, faUserSlash } from '@fortawesome/free-solid-svg-icons';

import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public modalRef!: BsModalRef;
  public teacherForm!: FormGroup;
  public title = 'Teachers';
  public selectedTeacher: Teacher | undefined;
  public faInfoCircle = faInfoCircle;
  public faGraduationCap = faGraduationCap;
  public faUserSlash = faUserSlash;

  public teachers = [
    { id: 1, name: 'Lauro', lastname: 'Green', subject: 'Math'  },
    { id: 2, name: 'Roberta', lastname: 'Blue', subject: 'Physics' },
    { id: 3, name: 'Ronaldo', lastname: 'White', subject: 'English' },
    { id: 4, name: 'Rodrigo', lastname: 'Black', subject: 'Portuguese' },
    { id: 5, name: 'Alexandra', lastname: 'Gray', subject: 'Programming' },
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
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  teacherSubmit() {
    console.log(this.teacherForm.value);
  }

  selectTeacher(teacher: Teacher) {
    this.selectedTeacher = teacher;
    this.teacherForm.patchValue(teacher);
  }

  back() {
    this.selectedTeacher = undefined;
  }

}

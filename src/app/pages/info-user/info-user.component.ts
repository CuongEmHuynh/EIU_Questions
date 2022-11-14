import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { emailValidator } from 'src/app/core/common/validation';
import { CateQuestion } from 'src/app/core/models/cate-question';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  @ViewChild('infoModal', { static: false }) infoModal?: ModalDirective;
  cateQuestion!: CateQuestion | undefined;

  submitted: boolean = false
  formInfoGroup!: FormGroup
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formInfoGroup.controls;
  }

  showModal(cate: CateQuestion | undefined = undefined) {
    this.cateQuestion = cate;
    console.log(this.cateQuestion);
    this.infoModal?.show();
  }

  initForm() {
    this.formInfoGroup = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, emailValidator()]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    })
  }
  validateForm() {
    if (this.formInfoGroup.invalid) {
      for (const control of Object.keys(this.formInfoGroup.controls)) {
        this.formInfoGroup.controls[control].markAsTouched();
      }
      return false;
    }
    return true
  }

  getUser() {
    if (this.validateForm()) {
      
    }
  }

}

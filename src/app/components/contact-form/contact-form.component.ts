import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { contactForm } from 'src/app/models/contact-form-model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, AfterContentChecked {

  constructor(
    private _router: Router,
    private _cd: ChangeDetectorRef,
  ) { }

  contactFormValues: contactForm = {
    firstName: '',
    sureName: '',
    email: '',
    description: '',
  };

  @ViewChild('firstName') firstName: NgModel;
  @ViewChild('sureName') sureName: NgModel;
  @ViewChild('email') email: NgModel;
  @ViewChild('description') description: NgModel;

  ngOnInit(): void {
  }

  submitForm(): void{
    alert('Submit!');
    this._router.navigate(['']);
  }

  checkValidation(): boolean{
    if(!(this.firstName || this.sureName || this.email || this.description)){
      return true;
    }else{
      const firstNameValid = this.firstName.valid;
      const sureNameValid = this.sureName.valid;
      const emailValid = this.email.valid;
      const descriptionValid = this.description.valid;

      if(firstNameValid && sureNameValid && emailValid && descriptionValid) return false;
      return true;
    }
  }

  ngAfterContentChecked(): void {
    this._cd.detectChanges();
  }
}

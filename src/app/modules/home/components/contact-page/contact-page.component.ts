import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { EmailMessageIErrorsEnum } from 'src/app/core/interfaces/shared_components.interfaces';

import { ContactService } from 'src/app/modules/home/services/contact.service';
import { SwalAlertService } from 'src/app/shared/services/swalAlert.service';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  parentUrl: string = 'market';
  errors = EmailMessageIErrorsEnum;
  contactForm: any;
  submitted: boolean = false;
  loading: boolean = false;


  constructor(
    public formBuilder: FormBuilder,
    private _contactService: ContactService
  ) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
      subject: '',
      message: ['', [Validators.required, Validators.minLength(20)]],
    })
  }

  get f() {
    return this.contactForm.controls;
  }

  sendEmailMessage(): void {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.loading = true;
    this._contactService
      .sendEmail(this.contactForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          SwalAlertService.alert('success', 'Message is send', 'Message is send successfully.');
        },
        error: error => {
          SwalAlertService.alert('warning', 'Oops...', 'Something went wrong.');

          this.loading = false;
          this.contactForm.reset();
          this.submitted = false;
        }
      });
  }
}

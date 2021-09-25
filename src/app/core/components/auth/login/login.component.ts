import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { RegistrationComponent } from '../registration/registration.component';
import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';

import { ErrorsEnum } from '../../../interfaces/auth.interface';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SwalAlertService } from 'src/app/shared/services/swalAlert.service';
import { ModalDataService } from 'src/app/shared/services/modalData.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() data: any;

  remember: boolean = false;
  userForm: any;
  submitted: boolean = false;
  loading: boolean = false;
  errors = ErrorsEnum;

  constructor(
    private _modalDataService: ModalDataService,
    private _authService: AuthService,
    private _loaderService: LoaderService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this._createForm();
  }

 private _createForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f() {
    return this.userForm.controls;
  }

  login(): void {
    this.submitted = true;

    if (this.userForm.invalid)  return;
  

    this.loading = true;
    this._loaderService.addLoader();

    this._authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          SwalAlertService.alert('success', 'Logged in', 'Logged successful');
         
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this._loaderService.removeLoader();
        },
        error: error => {
          setTimeout(() => {
            SwalAlertService.alert('warning', 'Oops...', 'Something went wrong.');
         
            this.loading = false;
            this._loaderService.removeLoader();
          }, 2000)
        }
      });

    this.close();
  }

  rememberUser(value: boolean): void {
    this.remember = value;
  }

  openRegisterModal(): void {
    this._modalDataService.showModalComponent(OverlayModalComponent, RegistrationComponent);
  }

  close(): void {
    this._modalDataService.hideModalComponent();
  }
}
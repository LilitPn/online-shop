import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';
import { LoginComponent } from '../login/login.component';

import { ErrorsEnum, User } from '../../../interfaces/auth.interface';

import { ModalDataService } from 'src/app/shared/services/modalData.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MustMatch } from 'src/app/shared/helpers/helpers.service';
import { SwalAlertService } from 'src/app/shared/services/swalAlert.service';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userForm: any;
  user: User;
  errors: ErrorsEnum;
  submitted: boolean = false;
  loading: boolean = false;


  constructor(
    private _modalDataService: ModalDataService,
    private _alertService: AlertService,
    private _loaderService: LoaderService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.userForm = this.formBuilder.group(
      {
        'name': ['', [Validators.required, Validators.minLength(5)]],
        'email': ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'confirmPassword': ['', [Validators.required, Validators.minLength(8)]],
      },
      { validator: MustMatch('password', 'confirmPassword') }
    )
  }

  get f(): any {
    return this.userForm.controls;
  }

  signIn(): void {
    this.submitted = true;

    if (this.userForm.invalid) return;

    this.user = {
      role: 'user',
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword
    }

    this.loading = true;
    this._loaderService.addLoader();

    this.authService.register(this.user)
      .pipe(first())
      .subscribe({
        next: () => {
          SwalAlertService.alert('success', 'Saved', 'Registration successful');

          this._alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
          this._loaderService.removeLoader();
        },
        error: error => {
          setTimeout(() => {
            SwalAlertService.alert('warning', 'Oops...', 'Something went wrong.');

            this._alertService.error(error);
            this.loading = false;
            this._loaderService.removeLoader();
          }, 2000);
        }
      });
  }

  openLoginModal(): void {
    this._modalDataService.showModalComponent(OverlayModalComponent, LoginComponent);
  }

  close(): void {
    this._modalDataService.hideModalComponent();
  }
}
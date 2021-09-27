import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AuthRememberComponent } from "./components/auth/auth-remember/auth-remember.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegistrationComponent } from "./components/auth/registration/registration.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { MainHeaderComponent } from "./components/layout/header/components/main-header/main-header.component";
import { UserHeaderComponent } from "./components/layout/header/components/user-header/user-header.component";
import { HeaderComponent } from "./components/layout/header/header.component";

import { AuthService } from "./services/auth.service";
import { BaseSettings } from "./services/baseSettings";
import { InitDataService } from "./services/InitData.service";



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    entryComponents: [
        UserHeaderComponent,
        MainHeaderComponent
    ],
    declarations: [
        HeaderComponent,
        UserHeaderComponent,
        MainHeaderComponent,
        FooterComponent,
        RegistrationComponent,
        LoginComponent,
        AuthRememberComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        RegistrationComponent,
        LoginComponent
    ],
    providers: [
        InitDataService,
        AuthService,
        BaseSettings
    ]
})
export class CoreModule { }

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
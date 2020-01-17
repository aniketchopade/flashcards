import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { fakeBackendProvider } from './_helpers';
import { CookieService } from 'ng2-cookies';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component'
import { AddQuestionComponent } from './add-question/add-question.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { ApprovalComponent } from './approval/approval.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AddQuestionComponent,
    StudyModeComponent,
    QuestionBankComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [fakeBackendProvider, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

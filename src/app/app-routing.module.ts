import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationService } from './_services';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { StudyModeComponent } from './study-mode/study-mode.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'question-bank',
    component: QuestionBankComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'study-mode',
    component: StudyModeComponent,
    canActivate: [AuthenticationService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

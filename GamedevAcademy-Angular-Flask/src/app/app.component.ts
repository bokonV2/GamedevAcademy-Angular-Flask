import { Component } from '@angular/core';

export interface Field{
  title:  string
  placeholder:  string
  type:  string
  icon:  string
  name: string
}
export interface Alerts{
  message: string
  icon: string
  color: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GamedevAcademy-Angular-Flask';
  email: Field = {title: 'Логин*', name:"email", placeholder: 'qwe@asd.sad', type: 'email', icon: 'done'}
  password: Field = {title: 'Пароль*', name: 'password', placeholder: 'Минимум 8 символов', type: 'password', icon: 'visibility'}
  fail: Alerts = {message: 'Неверный логин либо пароль', icon: 'warning', color: '#FF5754'}
  visible: boolean = false;

  changeVisible(): void{
    this.visible = !this.visible;
  }
  mylogin(login: any, password: any, mind: boolean): void{
    if (login.checks && password.checks) {
      window.open(`/login?password=${password.value}&login=${login.value}&mind=${mind}`,"_self")
    } else {
      this.changeVisible()
    }
  }

}

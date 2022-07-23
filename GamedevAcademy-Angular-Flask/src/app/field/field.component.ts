import { Component, OnInit, Input, Output } from '@angular/core';
import { Field } from '../app.component';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})


export class FieldComponent implements OnInit {
  @Input() obj: Field = {title: '', placeholder: '', name:'', type: '', icon: ''};
  borderColor = "blue";
  checks: boolean = false;
  value: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  checkPassword(event: any, ico: any): boolean{
    this.value = event.target.value;
    if (event.target.value.length >= 8){
      event.target.style.borderColor = 'green'
      return true
    } else {
      event.target.style.borderColor = 'red'
      return false
    }
  }
  checkEmail(event: any, ico: any): boolean{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    this.value = event.target.value;
    if (!filter.test(event.target.value)) {
        event.target.style.borderColor = "red"
        ico.style.color = "red"
        ico.innerHTML = "info";
        return false;
      } else {
        event.target.style.borderColor = "green"
        ico.style.color = "green"
        ico.innerHTML = "done";
        return true;
      }
  }
  check(event: any, ico: any): void{
    if (event.target.type == "email"){
      this.checks = this.checkEmail(event, ico)
    } else if (event.target.type == "password"){
      this.checks = this.checkPassword(event, ico)
    }
  }
  changeVisible(input: any, ico: any): void{
    if (input.type == "password"){
      input.type = "text"
      ico.innerHTML = "visibility_off";
    } else if (input.type == "text"){
      input.type = "password"
      ico.innerHTML = "visibility";
    }
  }
}

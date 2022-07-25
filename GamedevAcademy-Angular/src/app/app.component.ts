import { Component } from '@angular/core';

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
  title = 'GamedevAcademy-Angular';
  
}

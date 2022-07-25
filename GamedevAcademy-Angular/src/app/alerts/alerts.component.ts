import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { Alerts } from '../app.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit  {
  @Input() obj: Alerts = {message: 'Неверный логин либо пароль', icon: 'warning', color: '#FF5754'};
  @Input() switch: boolean = false
  visible: boolean = false
  timer: any = null
  alert: any = null

  ngOnInit(): void {

  }

  ngAfterViewInit(){
     this.alert = document.getElementById('alerts')
   }

   ngOnChanges(changes: SimpleChanges) {
     this.alert.style.display = "flex";
     this.openAlerts();
   }

  closeAlerts(): void {
    this.visible = false;
    this.showHide();
    clearTimeout(this.timer); this.timer = null;
  }

  openAlerts(): void {
    this.visible = true;
    this.showHide();
    this.timer = setTimeout( () => { this.closeAlerts() }, 15 * 1000 );
  }

  showHide(): void {
    if (this.visible) {
      this.alert.classList.remove('alerts_hide');
      this.alert.classList.add('alerts_show');
    } else {
      this.alert.classList.add('alerts_hide');
      this.alert.classList.remove('alerts_show');
    }
  }
}

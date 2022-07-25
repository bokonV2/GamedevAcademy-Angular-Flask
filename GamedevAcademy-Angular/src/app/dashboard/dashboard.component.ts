import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.auth.data;
  }

}

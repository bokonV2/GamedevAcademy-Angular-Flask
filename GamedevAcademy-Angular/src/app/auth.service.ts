import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;

  constructor(private http: HttpClient){ }

  login(email: string, password: string) {
    return this.http.post("http://51.15.220.219:81/api/login", {login: email, password: password})
  }
}

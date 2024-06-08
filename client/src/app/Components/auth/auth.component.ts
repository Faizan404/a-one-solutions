import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  // userLogin() {
  //   this.authService.isUserAuth = true;
  //   localStorage.setItem(
  //     'userActive',
  //     JSON.stringify(this.authService.isUserAuth)
  //   );
  // }
}

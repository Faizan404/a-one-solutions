import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  // userSignUp() {
  //   this.authService.isUserAuth = true;
  //   localStorage.setItem(
  //     'userActive',
  //     JSON.stringify(this.authService.isUserAuth)
  //   );
  // }
}

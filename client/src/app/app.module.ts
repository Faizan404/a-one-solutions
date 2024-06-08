import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { AuthComponent } from './Components/auth/auth.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ComplainDeskComponent } from './Components/complain-desk/complain-desk.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { WebDevelopmentComponent } from './Components/web-development/web-development.component';
import { PythonDevelopmentComponent } from './Components/python-development/python-development.component';
import { DigitalMarktingComponent } from './Components/digital-markting/digital-markting.component';
import { VideoEditingComponent } from './Components/video-editing/video-editing.component';
import { AdvanceComputerComponent } from './Components/advance-computer/advance-computer.component';
import { PricingFeaturesComponent } from './Components/pricing-features/pricing-features.component';
import { PriceCardsComponent } from './Components/price-cards/price-cards.component';
import { WhatsappButtonComponent } from './Components/whatsapp-button/whatsapp-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialComponent,
    AuthComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ComplainDeskComponent,
    ErrorComponent,
    AboutUsComponent,
    CartComponent,
    PricingComponent,
    WebDevelopmentComponent,
    PythonDevelopmentComponent,
    DigitalMarktingComponent,
    VideoEditingComponent,
    AdvanceComputerComponent,
    PricingFeaturesComponent,
    PriceCardsComponent,
    WhatsappButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

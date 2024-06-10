import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { ComplainDeskComponent } from './Components/complain-desk/complain-desk.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { WebDevelopmentComponent } from './Components/web-development/web-development.component';
import { PythonDevelopmentComponent } from './Components/python-development/python-development.component';
import { DigitalMarktingComponent } from './Components/digital-markting/digital-markting.component';
import { PriceCardsComponent } from './Components/price-cards/price-cards.component';
import { WhatsappButtonComponent } from './Components/whatsapp-button/whatsapp-button.component';
import { CareerComponent } from './Components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialComponent,
    ComplainDeskComponent,
    ErrorComponent,
    AboutUsComponent,
    CartComponent,
    WebDevelopmentComponent,
    PythonDevelopmentComponent,
    DigitalMarktingComponent,
    WhatsappButtonComponent,
    CareerComponent,
    PriceCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

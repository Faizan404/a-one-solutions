import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ComplainDeskComponent } from './Components/complain-desk/complain-desk.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { WebDevelopmentComponent } from './Components/web-development/web-development.component';
import { DigitalMarktingComponent } from './Components/digital-markting/digital-markting.component';
import { PythonDevelopmentComponent } from './Components/python-development/python-development.component';
import { PriceCardsComponent } from './Components/price-cards/price-cards.component';
import { CareerComponent } from './Components/career/career.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services/web-development',
    component: WebDevelopmentComponent,
  },
  {
    path: 'services/web-development/mean-mern',
    component: PriceCardsComponent,
  },
  {
    path: 'services/web-development/php-laravel',
    component: PriceCardsComponent,
  },
  {
    path: 'services/digital-marketing',
    component: DigitalMarktingComponent,
  },
  {
    path: 'services/digital-marketing/seo',
    component: PriceCardsComponent,
  },
  {
    path: 'services/digital-marketing/ppc',
    component: PriceCardsComponent,
  },
  {
    path: 'services/digital-marketing/email-marketing',
    component: PriceCardsComponent,
  },
  {
    path: 'services/digital-marketing/content-marketing',
    component: PriceCardsComponent,
  },
  {
    path: 'services/digital-marketing/social-media-marketing',
    component: PriceCardsComponent,
  },
  {
    path: 'services/e-commerce',
    component: PythonDevelopmentComponent,
  },
  {
    path: 'services/e-commerce/shopify',
    component: PriceCardsComponent,
  },
  {
    path: 'services/e-commerce/wix',
    component: PriceCardsComponent,
  },
  {
    path: 'services/e-commerce/woocommerce',
    component: PriceCardsComponent,
  },
  {
    path: 'services/e-commerce/bigcommerce',
    component: PriceCardsComponent,
  },
  {
    path: 'services/e-commerce/squarespace',
    component: PriceCardsComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ComplainDeskComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

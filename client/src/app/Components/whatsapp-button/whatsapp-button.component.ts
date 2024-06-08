import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss'],
})
export class WhatsappButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openWhatsApp(): void {
    const phoneNumber = '0019173850020'; // Replace with the actual phone number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories = [
    'Apartments',
    'Houses',
    'Land',
    'Commercial',
    'Luxury',
    'Student Housing'
  ];

  properties = [
    {
      title: 'Modern Apartment in Lekki',
      location: 'Lagos, Nigeria',
      price: '₦45,000,000',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
    },
    {
      title: 'Luxury Villa with Pool',
      location: 'Abuja, Nigeria',
      price: '₦120,000,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
      title: 'Serviced Studio Apartment',
      location: 'Accra, Ghana',
      price: '₵4,500/month',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c'
    },
    {
      title: 'Commercial Office Space',
      location: 'Nairobi, Kenya',
      price: 'KES 18,000,000',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c'
    }
  ];

}

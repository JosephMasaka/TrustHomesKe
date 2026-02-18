import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  tabs = [
    { name: 'Home', icon: 'home', route: '/' },
    { name: 'Buy', icon: 'buy', route: '/buy' },
    { name: 'Rent', icon: 'key', route: '/rent' },
    { name: 'Verify', icon: 'shield', route: '/verify' },
    { name: 'Agents', icon: 'users', route: '/agents' },
  ];

  selectedTab: string = 'Buy';

  activeTabClass = 'font-semibold text-black';
  inactiveTabClass = 'text-gray-500 hover:text-black';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}

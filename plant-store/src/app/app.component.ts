import { Component } from '@angular/core';

interface PlantItem {
  name: string;
  price: number;
  light: string;
  water: string;
  tag: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-store-angular14';
  searchText = '';

  products: PlantItem[] = [
    {
      name: 'Rosemary',
      price: 149,
      light: 'Full sun',
      water: 'Water when top soil dries',
      tag: 'Herb',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Pink Syngonium',
      price: 129,
      light: 'Bright indirect light',
      water: 'Keep slightly moist',
      tag: 'Indoor',
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Asparagus Fern',
      price: 159,
      light: 'Bright indirect light',
      water: 'Regular watering',
      tag: 'Balcony',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Money Plant',
      price: 99,
      light: 'Low to medium light',
      water: 'Water when soil is lightly dry',
      tag: 'Easy care',
      image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  careTips: string[] = [
    'Check soil before watering. Wet soil does not need more water.',
    'Keep rosemary in direct sunlight for better growth.',
    'Indoor plants prefer bright indirect light.',
    'Always use pots with drainage holes.'
  ];

  get filteredProducts(): PlantItem[] {
    const value = this.searchText.trim().toLowerCase();

    if (!value) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.tag.toLowerCase().includes(value)
    );
  }

  orderOnWhatsApp(product: PlantItem): void {
    const phone = '919000000000';
    const message = `Hello, I want to order ${product.name} for ₹${product.price}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
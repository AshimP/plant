import { Component } from '@angular/core';

interface PlantItem {
  name: string;
  price: number;
  light: string;
  water: string;
  tag: string;
  image: string;
  description: string;
  placement: string;
  difficulty: string;
  potSize: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-store';
  menuOpen = false;
  searchText = '';
  selectedCategory = 'All Plants';
  sortOption = 'Popular';

  phoneDisplay = 'NA';
  phoneRaw = '918961275920';
  location = 'Kolkata, West Bengal';

  categories: string[] = [
    'All Plants',
    'Indoor',
    'Balcony',
    'Low Maintenance',
    'Air Purifier',
    'Herbs',
    'Under ₹199'
  ];

  sortOptions: string[] = [
    'Popular',
    'Price: Low to High',
    'Price: High to Low',
    'Name: A to Z'
  ];

  products: PlantItem[] = [
    {
      name: 'Rosemary',
      price: 149,
      light: 'Full Sun',
      water: 'Low Water',
      tag: 'Herb',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
      description: 'Aromatic herb that looks clean, elegant and useful in sunny spaces.',
      placement: 'Sunny balcony',
      difficulty: 'Easy',
      potSize: '4 inch pot'
    },
    {
      name: 'Pink Syngonium',
      price: 199,
      light: 'Bright Indirect Light',
      water: 'Moderate Water',
      tag: 'Indoor',
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80',
      description: 'Soft decorative foliage with a refined indoor look for calm corners.',
      placement: 'Indoor corner',
      difficulty: 'Easy',
      potSize: '5 inch pot'
    },
    {
      name: 'Boston Fern',
      price: 249,
      light: 'Indirect Light',
      water: 'Keep Moist',
      tag: 'Air Purifier',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
      description: 'Lush green texture that adds fullness and softness to the home.',
      placement: 'Balcony / indoor',
      difficulty: 'Medium',
      potSize: '6 inch pot'
    },
    {
      name: 'Snake Plant',
      price: 179,
      light: 'Low Light',
      water: 'Low Water',
      tag: 'Low Maintenance',
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80',
      description: 'Strong sculptural leaves for a premium, modern and easy-care feel.',
      placement: 'Bedroom / office',
      difficulty: 'Very easy',
      potSize: '5 inch pot'
    }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  isCategoryMatch(product: PlantItem): boolean {
    if (this.selectedCategory === 'All Plants') {
      return true;
    }

    if (this.selectedCategory === 'Under ₹199') {
      return product.price <= 199;
    }

    if (this.selectedCategory === 'Balcony') {
      return (
        product.placement.toLowerCase().includes('balcony') ||
        product.tag.toLowerCase().includes('balcony')
      );
    }

    return (
      product.tag.toLowerCase() === this.selectedCategory.toLowerCase() ||
      product.placement.toLowerCase().includes(this.selectedCategory.toLowerCase()) ||
      product.difficulty.toLowerCase().includes(this.selectedCategory.toLowerCase())
    );
  }

  isSearchMatch(product: PlantItem): boolean {
    const value = this.searchText.trim().toLowerCase();

    if (!value) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(value) ||
      product.tag.toLowerCase().includes(value) ||
      product.light.toLowerCase().includes(value) ||
      product.placement.toLowerCase().includes(value) ||
      product.difficulty.toLowerCase().includes(value)
    );
  }

  get filteredProducts(): PlantItem[] {
    return this.products.filter(product =>
      this.isCategoryMatch(product) && this.isSearchMatch(product)
    );
  }

  get sortedFilteredProducts(): PlantItem[] {
    const items = [...this.filteredProducts];

    switch (this.sortOption) {
      case 'Price: Low to High':
        return items.sort((a, b) => a.price - b.price);

      case 'Price: High to Low':
        return items.sort((a, b) => b.price - a.price);

      case 'Name: A to Z':
        return items.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return items;
    }
  }

  getWhatsAppLink(message: string): string {
    return `https://wa.me/${this.phoneRaw}?text=${encodeURIComponent(message)}`;
  }

  getProductWhatsAppLink(product: PlantItem): string {
    const message =
      `Hello, I want to order ${product.name}.` +
      `\nPrice: ₹${product.price}` +
      `\nLight: ${product.light}` +
      `\nWater: ${product.water}` +
      `\nPlacement: ${product.placement}` +
      `\nPot Size: ${product.potSize}` +
      `\nPlease share delivery details for Kolkata.`;

    return this.getWhatsAppLink(message);
  }

  trackByProduct(index: number, item: PlantItem): string {
    return item.name;
  }

  trackByCategory(index: number, item: string): string {
    return item;
  }

  trackBySort(index: number, item: string): string {
    return item;
  }
}
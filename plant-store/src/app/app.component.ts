import { Component } from '@angular/core';
interface PotOption {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

interface DeliveryAreaItem {
  area: string;
  pincode: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface CustomerGalleryItem {
  name: string;
  area: string;
  image: string;
  caption: string;
}
interface OfferItem {
  title: string;
  subtitle: string;
  code: string;
}

interface PlantItem {
  name: string;
  price: number;
  originalPrice?: number;
  light: string;
  water: string;
  tag: string;
  image: string;
  description: string;
  placement: string;
  difficulty: string;
  potSize: string;
  badge?: string;
  gallery?: string[];
  availability: 'In Stock' | 'Limited Stock' | 'Restocking Soon';
  whyThisPlant: string[];
  watchingNow?: number;
  soldRecently?: number;
  soldWindow?: string;
  dispatchMessage?: string;
  offers?: OfferItem[];
  
}
interface GiftComboItem {
  title: string;
  subtitle: string;
  price: number;
  image: string;
  badge: string;
}
interface SpaceItem {
  title: string;
  subtitle: string;
  image: string;
}

interface ComboItem {
  title: string;
  subtitle: string;
  price: number;
  image: string;
  badge: string;
}
interface TestimonialItem {
  name: string;
  area: string;
  text: string;
}
interface AddOnItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

interface CustomerGalleryItem {
  name: string;
  area: string;
  image: string;
  caption: string;
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
  selectedProduct: PlantItem | null = null;
  phoneDisplay = 'NA';
  phoneRaw = '918961275920';
  location = 'Kolkata, West Bengal';
  selectedAddOnIds: string[] = [];
selectedProductImage: string = '';
compareSelectedNames: string[] = [];
recentlyViewedNames: string[] = [];
selectedQuantity = 1;
cartCount = 0;
copiedOfferCode = '';

deliverySearch = '';
deliveryResult = '';

selectedPotId = '';
selectedOccasion = '';
giftNote = '';

faqSearch = '';

occasionOptions: string[] = [
  'Birthday',
  'Housewarming',
  'Desk Gift',
  'Anniversary',
  'Just Because'
];

potOptions: PotOption[] = [
  {
    id: 'ceramic-white',
    title: 'White Ceramic Pot',
    subtitle: 'Minimal premium finish',
    price: 199,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'terracotta',
    title: 'Terracotta Planter',
    subtitle: 'Warm earthy classic style',
    price: 149,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'black-matte',
    title: 'Black Matte Pot',
    subtitle: 'Modern desk-friendly look',
    price: 229,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80'
  }
];

deliveryAreas: DeliveryAreaItem[] = [
  { area: 'Salt Lake', pincode: '700091' },
  { area: 'New Town', pincode: '700156' },
  { area: 'Gariahat', pincode: '700019' },
  { area: 'Dum Dum', pincode: '700028' },
  { area: 'Ballygunge', pincode: '700019' },
  { area: 'Howrah', pincode: '711101' },
  { area: 'Behala', pincode: '700034' },
  { area: 'Park Street', pincode: '700016' }
];

faqs: FAQItem[] = [
  {
    q: 'Do you deliver all over Kolkata?',
    a: 'We deliver across many Kolkata locations. Share your area or pincode and we will confirm availability quickly.'
  },
  {
    q: 'Are pots included with the plants?',
    a: 'Yes, the nursery pot is included unless mentioned otherwise. Premium planter upgrades can be added separately.'
  },
  {
    q: 'How do I place an order?',
    a: 'Click any WhatsApp order button on the site. The message opens with the product details already filled in.'
  },
  {
    q: 'Do you provide care guidance?',
    a: 'Yes. Basic watering, light and placement guidance is available before and after purchase.'
  },
  {
    q: 'What if a plant is damaged during delivery?',
    a: 'Please share photos immediately on WhatsApp after delivery. We will check and guide you on the next step.'
  }
];

customerGallery: CustomerGalleryItem[] = [
  {
    name: 'Ananya',
    area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80',
    caption: 'A calm bedroom corner styled with soft indoor greens.'
  },
  {
    name: 'Rohan',
    area: 'New Town',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80',
    caption: 'A clean desk setup with a structured low-maintenance plant.'
  },
  {
    name: 'Priya',
    area: 'Gariahat',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
    caption: 'A brighter balcony look with layered greens and warm pots.'
  }
];

quizSpaces: string[] = ['Bedroom', 'Balcony', 'Workspace', 'Living Room'];
quizLights: string[] = ['Low Light', 'Bright Indirect Light', 'Full Sun'];
quizCareLevels: string[] = ['Very Easy', 'Easy', 'Medium'];



addOnOptions: AddOnItem[] = [
  {
    id: 'ceramic-pot',
    title: 'Ceramic Pot Upgrade',
    subtitle: 'Clean premium look for indoor styling',
    price: 199,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pebble-top',
    title: 'Decor Pebble Topping',
    subtitle: 'A tidy finished surface for the planter',
    price: 79,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gift-note',
    title: 'Gift Note Card',
    subtitle: 'Simple handwritten-style gifting touch',
    price: 49,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80'
  }
];



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
    originalPrice: 199,
    light: 'Full Sun',
    water: 'Low Water',
    tag: 'Herb',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
    description: 'Aromatic herb that looks clean, elegant and useful in sunny spaces.',
    placement: 'Sunny balcony',
    difficulty: 'Easy',
    potSize: '4 inch pot',
    badge: 'Best Seller',
    availability: 'In Stock',
    watchingNow: 12,
    whyThisPlant: [
      'Great for sunny balconies and kitchen corners',
      'Easy for beginners who want a useful herb plant',
      'Adds fragrance and a fresh premium look'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80'
    ],
soldRecently: 17,
soldWindow: 'last 15 hours',
dispatchMessage: 'Order yours before 2:30 PM for fast dispatch',
offers: [
  {
    title: 'Get ₹100 off',
    subtitle: 'On carts above ₹899',
    code: 'SAVE100'
  },
  {
    title: 'Get 9% off',
    subtitle: 'On carts above ₹1200',
    code: 'SAVE09'
  },
  {
    title: 'Get 15% off',
    subtitle: 'On carts above ₹2400',
    code: 'SAVE15'
  }
],
  },
  {
    name: 'Pink Syngonium',
    price: 199,
    originalPrice: 249,
    light: 'Bright Indirect Light',
    water: 'Moderate Water',
    tag: 'Indoor',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1400&q=80',
    description: 'Soft decorative foliage with a refined indoor look for calm corners.',
    placement: 'Indoor corner',
    difficulty: 'Easy',
    potSize: '5 inch pot',
    badge: 'New',
    availability: 'Limited Stock',
    watchingNow: 8,
    whyThisPlant: [
      'Perfect for soft indoor styling and peaceful corners',
      'Works well in bright indirect light',
      'A beautiful choice for gifting and decor'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1400&q=80'
    ],
    soldRecently: 17,
soldWindow: 'last 15 hours',
dispatchMessage: 'Order yours before 2:30 PM for fast dispatch',
offers: [
  {
    title: 'Get ₹100 off',
    subtitle: 'On carts above ₹899',
    code: 'SAVE100'
  },
  {
    title: 'Get 9% off',
    subtitle: 'On carts above ₹1200',
    code: 'SAVE09'
  },
  {
    title: 'Get 15% off',
    subtitle: 'On carts above ₹2400',
    code: 'SAVE15'
  }
],
  },
  {
    name: 'Boston Fern',
    price: 249,
    originalPrice: 299,
    light: 'Indirect Light',
    water: 'Keep Moist',
    tag: 'Air Purifier',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80',
    description: 'Lush green texture that adds fullness and softness to the home.',
    placement: 'Balcony / indoor',
    difficulty: 'Medium',
    potSize: '6 inch pot',
    badge: 'Popular',
    availability: 'In Stock',
    watchingNow: 15,
    whyThisPlant: [
      'Adds rich greenery and fullness to a room',
      'A strong pick for balcony or indoor styling',
      'Feels more lush and premium than simpler plants'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80'
    ],
    soldRecently: 17,
soldWindow: 'last 15 hours',
dispatchMessage: 'Order yours before 2:30 PM for fast dispatch',
offers: [
  {
    title: 'Get ₹100 off',
    subtitle: 'On carts above ₹899',
    code: 'SAVE100'
  },
  {
    title: 'Get 9% off',
    subtitle: 'On carts above ₹1200',
    code: 'SAVE09'
  },
  {
    title: 'Get 15% off',
    subtitle: 'On carts above ₹2400',
    code: 'SAVE15'
  }
],
  },
  {
    name: 'Snake Plant',
    price: 179,
    originalPrice: 229,
    light: 'Low Light',
    water: 'Low Water',
    tag: 'Low Maintenance',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80',
    description: 'Strong sculptural leaves for a premium, modern and easy-care feel.',
    placement: 'Bedroom / office',
    difficulty: 'Very Easy',
    potSize: '5 inch pot',
    badge: 'Easy Care',
    availability: 'Restocking Soon',
    watchingNow: 6,
    whyThisPlant: [
      'Excellent for beginners and busy schedules',
      'Works in bedrooms, desks and office corners',
      'Low-maintenance plant with a clean premium look'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80'
    ],
    soldRecently: 17,
soldWindow: 'last 15 hours',
dispatchMessage: 'Order yours before 2:30 PM for fast dispatch',
offers: [
  {
    title: 'Get ₹100 off',
    subtitle: 'On carts above ₹899',
    code: 'SAVE100'
  },
  {
    title: 'Get 9% off',
    subtitle: 'On carts above ₹1200',
    code: 'SAVE09'
  },
  {
    title: 'Get 15% off',
    subtitle: 'On carts above ₹2400',
    code: 'SAVE15'
  }
],
  }
];

openProductDetails(product: PlantItem): void {
  this.selectedProduct = product;
  this.selectedProductImage = product.image;
  this.selectedPotId = '';
  this.selectedOccasion = '';
  this.giftNote = '';
  this.recentlyViewedNames = [
    product.name,
    ...this.recentlyViewedNames.filter(name => name !== product.name)
  ].slice(0, 4);
}

closeProductDetails(): void {
  this.selectedProduct = null;
  this.selectedProductImage = '';
  this.selectedPotId = '';
  this.selectedOccasion = '';
  this.giftNote = '';
}
toggleCompare(product: PlantItem): void {
  if (this.compareSelectedNames.includes(product.name)) {
    this.compareSelectedNames = this.compareSelectedNames.filter(name => name !== product.name);
    return;
  }

  if (this.compareSelectedNames.length >= 3) {
    this.compareSelectedNames = [
      ...this.compareSelectedNames.slice(1),
      product.name
    ];
    return;
  }

  this.compareSelectedNames = [...this.compareSelectedNames, product.name];
}

isCompared(product: PlantItem): boolean {
  return this.compareSelectedNames.includes(product.name);
}

removeCompared(name: string): void {
  this.compareSelectedNames = this.compareSelectedNames.filter(item => item !== name);
}

get compareProducts(): PlantItem[] {
  return this.compareSelectedNames
    .map(name => this.products.find(product => product.name === name))
    .filter((product): product is PlantItem => !!product);
}

get recentlyViewedProducts(): PlantItem[] {
  return this.recentlyViewedNames
    .map(name => this.products.find(product => product.name === name))
    .filter((product): product is PlantItem => !!product);
}

get relatedOutsideProducts(): PlantItem[] {
  const seed = this.recentlyViewedProducts[0];
  if (!seed) {
    return [];
  }

  return this.products
    .filter(product =>
      product.name !== seed.name &&
      (
        product.tag === seed.tag ||
        product.difficulty === seed.difficulty ||
        product.placement.toLowerCase().includes(seed.placement.split('/')[0].trim().toLowerCase())
      )
    )
    .slice(0, 3);
}

selectPot(id: string): void {
  this.selectedPotId = this.selectedPotId === id ? '' : id;
}

get selectedPot(): PotOption | undefined {
  return this.potOptions.find(item => item.id === this.selectedPotId);
}

get productPopupTotal(): number {
  if (!this.selectedProduct) {
    return 0;
  }

  return this.selectedProduct.price + (this.selectedPot?.price || 0);
}

checkDeliveryArea(): void {
  const raw = this.deliverySearch.trim();
  const numeric = raw.replace(/\D/g, '');
  const lower = raw.toLowerCase();

  if (!raw) {
    this.deliveryResult = 'Enter your area or pincode first.';
    return;
  }

  const found = this.deliveryAreas.find(item =>
    item.pincode === numeric || item.area.toLowerCase().includes(lower)
  );

  if (found) {
    this.deliveryResult = `Delivery available in ${found.area} (${found.pincode}).`;
  } else {
    this.deliveryResult = 'Please confirm this area on WhatsApp before placing the order.';
  }
}

get filteredFaqs(): FAQItem[] {
  const value = this.faqSearch.trim().toLowerCase();

  if (!value) {
    return this.faqs;
  }

  return this.faqs.filter(item =>
    item.q.toLowerCase().includes(value) ||
    item.a.toLowerCase().includes(value)
  );
}

getProductDetailWhatsAppLink(): string {
  if (!this.selectedProduct) {
    return this.getWhatsAppLink('Hello, I want to order a plant.');
  }

  const potText = this.selectedPot
    ? `\nSelected Pot: ${this.selectedPot.title} (+₹${this.selectedPot.price})`
    : '';

  const occasionText = this.selectedOccasion
    ? `\nOccasion: ${this.selectedOccasion}`
    : '';

  const noteText = this.giftNote.trim()
    ? `\nGift Note: ${this.giftNote.trim()}`
    : '';

  const total = this.productPopupTotal;

  const message =
    `Hello, I want to order ${this.selectedProduct.name}.` +
    `\nPlant Price: ₹${this.selectedProduct.price}` +
    potText +
    occasionText +
    noteText +
    `\nEstimated Total: ₹${total}` +
    `\nPlease share delivery details for Kolkata.`;

  return this.getWhatsAppLink(message);
}

trackByPot(index: number, item: PotOption): string {
  return item.id;
}

trackByFaq(index: number, item: FAQItem): string {
  return item.q;
}

trackByGallery(index: number, item: CustomerGalleryItem): string {
  return item.name + item.area;
}

setSelectedProductImage(image: string): void {
  this.selectedProductImage = image;
}

toggleAddOn(id: string): void {
  if (this.selectedAddOnIds.includes(id)) {
    this.selectedAddOnIds = this.selectedAddOnIds.filter(item => item !== id);
  } else {
    this.selectedAddOnIds = [...this.selectedAddOnIds, id];
  }
}

isAddOnSelected(id: string): boolean {
  return this.selectedAddOnIds.includes(id);
}

get selectedAddOns(): AddOnItem[] {
  return this.addOnOptions.filter(item => this.selectedAddOnIds.includes(item.id));
}

get selectedAddOnsTotal(): number {
  return this.selectedAddOns.reduce((sum, item) => sum + item.price, 0);
}



get relatedProducts(): PlantItem[] {
  if (!this.selectedProduct) {
    return [];
  }

  return this.products
    .filter(product =>
      product.name !== this.selectedProduct!.name &&
      (
        product.tag === this.selectedProduct!.tag ||
        product.placement.toLowerCase().includes(this.selectedProduct!.placement.split('/')[0].trim().toLowerCase()) ||
        product.difficulty === this.selectedProduct!.difficulty
      )
    )
    .slice(0, 3);
}

get bestSellerProducts(): PlantItem[] {
  return this.products.filter(product =>
    product.badge === 'Best Seller' || product.badge === 'Popular'
  );
}

serviceAreas: string[] = [
  'Salt Lake',
  'New Town',
  'Gariahat',
  'Dum Dum',
  'Ballygunge',
  'Howrah',
  'Behala',
  'Park Street'
];
testimonials: TestimonialItem[] = [
  {
    name: 'Ananya',
    area: 'Kolkata',
    text: 'The plant arrived healthy and looked even better in person. Packaging was neat and the ordering process felt very easy.'
  },
  {
    name: 'Rohan',
    area: 'Salt Lake',
    text: 'Good quality plants and the website felt premium and simple. WhatsApp ordering was smooth and quick.'
  },
  {
    name: 'Priya',
    area: 'Gariahat',
    text: 'Loved the boutique feel of the collection. The plant looked beautiful in my balcony and the support was helpful.'
  },
  {
    name: 'Soham',
    area: 'New Town',
    text: 'Very clean presentation and the plant quality was genuinely nice. It did not feel like a random nursery order.'
  },
  {
    name: 'Madhurima',
    area: 'Dum Dum',
    text: 'Simple ordering, fast response and good plant care guidance. The site made the whole process feel trustworthy.'
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




shopSpaces: SpaceItem[] = [
  {
    title: 'Bedroom',
    subtitle: 'Calm greens for restful corners',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Balcony',
    subtitle: 'Fresh picks for light and open air',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Workspace',
    subtitle: 'Simple plants for desks and focus',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Living Room',
    subtitle: 'Statement greens for elegant spaces',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1400&q=80'
  }
];

comboPacks: ComboItem[] = [
  {
    title: 'Balcony Starter Combo',
    subtitle: 'A simple set for brighter balcony corners and easy care.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80',
    badge: 'Combo Pack'
  },
  {
    title: 'Bedroom Calm Combo',
    subtitle: 'Soft indoor greens chosen for peaceful and styled spaces.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80',
    badge: 'Best Value'
  },
  {
    title: 'Beginner Plant Pack',
    subtitle: 'Low-maintenance plants for first-time plant owners.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80',
    badge: 'Easy Care'
  }
];
getComboWhatsAppLink(combo: ComboItem): string {
  return this.getWhatsAppLink(
    `Hello, I want to order the ${combo.title} for ₹${combo.price}. Please share delivery details.`
  );
}

trackBySpace(index: number, item: SpaceItem): string {
  return item.title;
}

trackByCombo(index: number, item: ComboItem): string {
  return item.title;
}


quizAnswers = {
  space: '',
  light: '',
  care: ''
};

giftCombos: GiftComboItem[] = [
  {
    title: 'Housewarming Gift Set',
    subtitle: 'A curated green gift set for warm new beginnings and premium presentation.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1400&q=80',
    badge: 'Gift Pick'
  },
  {
    title: 'Desk & Study Gift Combo',
    subtitle: 'Elegant compact plants for work desks, study tables and thoughtful gifting.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80',
    badge: 'Best Value'
  },
  {
    title: 'Balcony Lover Gift Pack',
    subtitle: 'Fresh picks for airy corners and bright outdoor moods.',
    price: 749,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80',
    badge: 'Popular Gift'
  }
];
selectQuizAnswer(type: 'space' | 'light' | 'care', value: string): void {
  this.quizAnswers[type] = value;
}

resetQuiz(): void {
  this.quizAnswers = {
    space: '',
    light: '',
    care: ''
  };
}

get plantFinderResults(): PlantItem[] {
  const results = this.products.filter(product => {
    const matchesSpace =
      !this.quizAnswers.space ||
      product.placement.toLowerCase().includes(this.quizAnswers.space.toLowerCase()) ||
      (this.quizAnswers.space === 'Living Room' && product.placement.toLowerCase().includes('indoor'));

    const matchesLight =
      !this.quizAnswers.light ||
      product.light.toLowerCase().includes(this.quizAnswers.light.toLowerCase());

    const matchesCare =
      !this.quizAnswers.care ||
      product.difficulty.toLowerCase().includes(this.quizAnswers.care.toLowerCase());

    return matchesSpace && matchesLight && matchesCare;
  });

  return (results.length ? results : this.products).slice(0, 3);
}

getGiftComboWhatsAppLink(combo: GiftComboItem): string {
  return this.getWhatsAppLink(
    `Hello, I want to order the ${combo.title} for ₹${combo.price}. Please share delivery details.`
  );
}

getAvailabilityClass(status: PlantItem['availability']): string {
  return status.toLowerCase().replace(/\s+/g, '-');
}

trackByGiftCombo(index: number, item: GiftComboItem): string {
  return item.title;
}
decreaseQuantity(): void {
  if (this.selectedQuantity > 1) {
    this.selectedQuantity -= 1;
  }
}

increaseQuantity(): void {
  this.selectedQuantity += 1;
}

addToCart(): void {
  this.cartCount += this.selectedQuantity;
}

async copyOfferCode(code: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(code);
    this.copiedOfferCode = code;
    setTimeout(() => {
      this.copiedOfferCode = '';
    }, 1500);
  } catch {
    this.copiedOfferCode = '';
  }
}

askQuestion(product?: PlantItem): void {
  const current = product || this.selectedProduct;
  if (!current) {
    return;
  }

  const message =
    `Hello, I have a question about ${current.name}.` +
    `\nPrice: ₹${current.price}` +
    `\nPlease help me with details.`;

  window.open(this.getWhatsAppLink(message), '_blank');
}

async shareSelectedProduct(): Promise<void> {
  if (!this.selectedProduct) {
    return;
  }

  const shareText = `${this.selectedProduct.name} - ₹${this.selectedProduct.price}`;
  const shareUrl = `${window.location.origin}${window.location.pathname}#featured`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: this.selectedProduct.name,
        text: shareText,
        url: shareUrl
      });
    } catch {
      return;
    }
  } else {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    } catch {
      return;
    }
  }
}

getProductSavings(product: PlantItem): number {
  return product.originalPrice && product.originalPrice > product.price
    ? product.originalPrice - product.price
    : 0;
}
}


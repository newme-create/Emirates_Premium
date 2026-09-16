export type ActiveTab = 
  | 'accueil' 
  | 'services' 
  | 'comment-ca-marche' 
  | 'tarifs' 
  | 'suivi' 
  | 'agences' 
  | 'adresse-chine' 
  | 'contact';

export interface TimelineStep {
  step: string;
  date: string;
  location?: string;
  done: boolean;
  current?: boolean;
}

export interface Shipment {
  code: string;
  status: string;
  statusType: 'transit' | 'delivered' | 'processing' | 'express';
  origin: string;
  destination: string;
  weight: string;
  volume: string;
  service: string;
  lastUpdate: string;
  location: string;
  estimatedDelivery: string;
  referenceClient?: string;
  packagesCount?: number;
  declaredValue?: string;
  transportMode: 'Aérien' | 'Maritime' | 'Terrestre';
  proofImage?: string;
  timeline: TimelineStep[];
}

export interface ConfirmedDelivery {
  id: string;
  route: string;
  title: string;
  details: string;
  quote: string;
  badge: string;
  image: string;
  date: string;
  client: string;
  destination: string;
  trackingCode: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  category: 'fret' | 'commerce' | 'logistique';
  imagePlaceholderGradient: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badgeNumber?: string;
  colorBadge?: string;
  popular?: boolean;
  speedTag?: string;
  subtitle: string;
  price: string;
  pricePerKg?: number;
  unit: string;
  delay?: string;
  condition?: string;
  features: string[];
  imageGradient: string;
}

export interface PhonePricingItem {
  id: string;
  category: string;
  rate: string;
  unit: string;
  description: string;
  priceNumber?: number;
  isPerUnit?: boolean;
  minPrice?: number;
  maxPrice?: number;
}

export interface MerchandiseCategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface CompanyValue {
  id: string;
  iconName: string;
  title: string;
  titleZh: string;
  description: string;
}

export interface ComplementaryService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MaritimePricingCategory {
  id: string;
  category: string;
  tariff: string;
  pricePerCbm: number | null;
  examples: string;
  badge?: string;
  badgeColor?: string;
  iconName?: string;
}

export interface Agency {
  id: string;
  city: string;
  country: string;
  title: string;
  subtitle: string;
  tag: string;
  address: string;
  addressZh?: string;
  phones: string[];
  email: string;
  hours: string;
  whatsapp: string;
  isHub?: boolean;
  services: string[];
}

export interface UserSession {
  fullName: string;
  phone?: string;
  email: string;
  isLoggedIn: boolean;
  clientCode?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}


export enum TourType {
  CLASSIC = 'CLASSIC',
  FAMILY = 'FAMILY',
  PHOTO = 'PHOTO'
}

export interface ItineraryItem {
  time: string;
  location: string;
  description: string;
  highlight?: string;
  note?: string; // e.g. ticket price
  iconType?: 'walk' | 'car' | 'food' | 'photo' | 'landmark';
}

export interface LunchOption {
  name: string;
  type: string;
  priceLevel: string;
}

export interface TourPackage {
  id: TourType;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  idealFor: string;
  coverImage: string;
  itinerary: ItineraryItem[];
  lunchOptions?: LunchOption[];
  priceEstimate?: string; // Optional price range
  specialService?: {
    title: string;
    description: string;
  };
}

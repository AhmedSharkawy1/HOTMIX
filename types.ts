
export interface MenuItem {
  name: string;
  prices: string[];
  labels?: string[];
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  emoji: string;
  image: string;
  items: MenuItem[];
  subtitles?: string[];
}

export interface AdditionGroup {
  name: string;
  price: string;
  items: string[];
}

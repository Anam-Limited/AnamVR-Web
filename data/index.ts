export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  textColor: string;
}

export interface BlogPostType {
  id: number;
  title: string;
  readTime: string;
  url: string;
}

export interface ShopFeatureType {
  text: string;
}

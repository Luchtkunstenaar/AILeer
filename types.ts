
export type Language = 'en' | 'nl';

export interface PromptOptions {
  subject: string;
  style: string;
  mood: string;
  quality: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  prompt: string;
  category: 'photography' | 'art' | 'fantasy' | 'sci-fi' | 'fashion';
}

export interface NavItem {
  id: string; // Changed from label to ID for translation lookup
  path: string;
}

export interface AffiliateGame {
  name: string;
  descriptionEn: string;
  descriptionNl: string;
  url: string;
  icon: string;
  tag: string;
}

export interface GuideItem {
  id: string;
  titleEn: string;
  titleNl: string;
  descEn: string;
  descNl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  readTime: string;
  tags: string[];
}

export interface BrandProfile {
  name: string;
  domain: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  industry: string;
  vibe: string;
}

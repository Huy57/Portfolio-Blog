export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'work';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
  role: string;
  teamSize?: number;
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'document';
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  category: string;
  date: string;
  tags?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language' | 'tool';
  level: number; // 1-100
  icon?: string;
  color?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: number;
  views?: number;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  token?: string;
}

import React from 'react';
import { 
  Search, 
  Target, 
  Share2, 
  Users, 
  ExternalLink, 
  Code, 
  Palette, 
  BarChart3, 
  PenTool, 
  Mail, 
  ShieldCheck, 
  MousePointer2, 
  Smartphone, 
  Video, 
  Database, 
  ShoppingCart, 
  GraduationCap, 
  Megaphone,
  Briefcase,
  Zap
} from 'lucide-react';
import { ServiceItem, NavLink, ValueItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Our SEO services improve your website’s visibility on Google and other search engines through on-page SEO, technical SEO, keyword optimization, and high-quality content strategies.',
    keywords: ['SEO services', 'organic SEO', 'keyword optimization', 'Google ranking'],
    icon: 'Search'
  },
  {
    id: 'sem',
    title: 'Search Engine Marketing (SEM / PPC)',
    description: 'We create high-performance paid campaigns on Google Ads and Bing Ads to generate instant traffic and qualified leads. Our SEM strategies focus on ROI and ad quality.',
    keywords: ['SEM services', 'Google Ads management', 'paid search marketing'],
    icon: 'Target'
  },
  {
    id: 'smm',
    title: 'Social Media Marketing (SMM)',
    description: 'Build awareness, engagement, and trust across platforms like Facebook, Instagram, LinkedIn, and Twitter. We grow your audience organically and through paid campaigns.',
    keywords: ['social media marketing services', 'SMM agency', 'social media growth'],
    icon: 'Share2'
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'Design targeted lead generation campaigns using paid ads, landing pages, funnels, and CRM integrations to capture high-quality leads that convert.',
    keywords: ['lead generation services', 'online lead generation', 'B2B leads'],
    icon: 'Users'
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description: 'Improve domain authority and search engine rankings through high-quality backlinks, guest posting, and outreach campaigns.',
    keywords: ['link building services', 'backlinks for SEO', 'domain authority'],
    icon: 'ExternalLink'
  },
  {
    id: 'cro',
    title: 'CRO (Conversion Rate Optimization)',
    description: 'Analyze user behavior and optimize landing pages, funnels, and website elements to increase conversions and maximize ROI from existing traffic.',
    keywords: ['CRO services', 'conversion optimization', 'improve conversion rate'],
    icon: 'MousePointer2'
  },
  {
    id: 'content',
    title: 'Content Writing',
    description: 'Deliver SEO-optimized content including blogs, website copy, and ad content that drives traffic and builds brand authority.',
    keywords: ['SEO content writing', 'content marketing services'],
    icon: 'PenTool'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Nurture leads, retain customers, and boost engagement through personalized, automated, and high-converting email strategies.',
    keywords: ['email marketing services', 'email automation', 'lead nurturing'],
    icon: 'Mail'
  },
  {
    id: 'orm',
    title: 'ORM (Online Reputation Management)',
    description: 'Manage reviews, build positive brand perception, and protect online reputation across Google and social platforms.',
    keywords: ['ORM services', 'online reputation management'],
    icon: 'ShieldCheck'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Design and develop SEO-friendly, responsive, and high-performance websites that convert visitors into customers.',
    keywords: ['website development services', 'responsive website design'],
    icon: 'Code'
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Build strong brand identities through logo design, brand guidelines, color systems, and messaging strategies.',
    keywords: ['branding services', 'brand identity design'],
    icon: 'Palette'
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    description: 'Develop scalable and user-friendly mobile applications for Android and iOS platforms tailored to your business needs.',
    keywords: ['mobile app development services'],
    icon: 'Smartphone'
  },
  {
    id: 'video',
    title: 'Video Marketing',
    description: 'Create engaging video content for ads, social media, and product promotion to increase engagement and conversions.',
    keywords: ['video marketing services', 'promotional videos'],
    icon: 'Video'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Track performance using Google Analytics and Search Console to provide actionable insights for business growth.',
    keywords: ['digital marketing analytics', 'performance reporting'],
    icon: 'BarChart3'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Build and market e-commerce websites with SEO, paid ads, and analytics for maximum sales growth.',
    keywords: ['e-commerce solutions', 'online store development'],
    icon: 'ShoppingCart'
  },
  {
    id: 'hosting',
    title: 'Web Hosting & Maintenance',
    description: 'Secure hosting solutions, website maintenance, backups, and performance optimization.',
    keywords: ['web hosting services', 'website maintenance'],
    icon: 'Database'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Transparency & Trust',
    description: 'We believe in complete openness about our processes and honest communication with our clients.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Performance-driven',
    description: 'Our strategies are built on data and results, ensuring every penny of your budget counts.',
    icon: 'Zap'
  },
  {
    title: 'Continuous Learning',
    description: 'The digital landscape changes daily. We stay ahead of the curve to keep your brand at the top.',
    icon: 'GraduationCap'
  },
  {
    title: 'Customer-centric',
    description: 'Your success is our success. We tailor every solution to fit your specific business goals.',
    icon: 'Briefcase'
  }
];

export const getIcon = (name: string, className?: string) => {
  const icons: Record<string, React.ElementType> = {
    Search, Target, Share2, Users, ExternalLink, Code, Palette, BarChart3, 
    PenTool, Mail, ShieldCheck, MousePointer2, Smartphone, Video, Database, 
    ShoppingCart, GraduationCap, Megaphone, Briefcase, Zap
  };
  const IconComponent = icons[name] || Search;
  return <IconComponent className={className} />;
};

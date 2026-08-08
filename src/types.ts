/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // references Lucide icon
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "Weddings" | "Florals" | "Corporate" | "Details";
  title: string;
  spanClass?: string; // for masonry grid sizing
}

export interface PortfolioHighlight {
  id: string;
  title: string;
  eventType: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: number;
  message: string;
  submittedAt: string;
}

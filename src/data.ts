/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, PortfolioHighlight, TestimonialItem, ProcessStep } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Luxury Weddings",
    description: "From intimate sunset vows in Llanogrande to breathtaking cathedral ceremonies in Medellín, we design bespoke celebrations that perfectly reflect your unique love story.",
    iconName: "Sparkles"
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "High-end product launches, annual galas, and immersive branding events designed to captivate your stakeholders and elevate your corporate identity.",
    iconName: "Briefcase"
  },
  {
    id: "private",
    title: "Private Celebrations",
    description: "Milestone birthdays, exclusive anniversaries, and luxurious cocktail soirées curated with bespoke themes and impeccable culinary presentations.",
    iconName: "GlassWater"
  },
  {
    id: "styling",
    title: "Event Styling",
    description: "Cohesive aesthetic curations including custom linen selections, luxury flatware, spatial coordination, and bespoke atmospheric lighting.",
    iconName: "Palette"
  },
  {
    id: "floral",
    title: "Floral Design",
    description: "Sculptural floral installations, statement centerpieces, and cascading botanical ceilings crafted by master artisans with the finest Colombian stems.",
    iconName: "Flower"
  },
  {
    id: "decor",
    title: "Custom Decorations",
    description: "Bespoke furniture curation, custom fabric draping, hand-lettered paper details, and tailored art installations unique to your event.",
    iconName: "Layers"
  },
  {
    id: "transformation",
    title: "Venue Transformation",
    description: "Converting blank canvas spaces, warehouses, or outdoor gardens into breathtaking, immersive environments using structural design.",
    iconName: "Maximize"
  },
  {
    id: "planning",
    title: "Full Event Planning",
    description: "End-to-end white-glove coordination, vendor management, precise timeline execution, and on-site direction for a flawless, stress-free experience.",
    iconName: "CalendarDays"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    category: "Weddings",
    title: "Candlelit Garden Ceremony",
    spanClass: "md:col-span-2 md:row-span-2"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Ethereal Table Setting",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    category: "Florals",
    title: "Sculptural White Rose Centerpiece",
    spanClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    category: "Corporate",
    title: "Grand Pavilion Gala",
    spanClass: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200",
    category: "Weddings",
    title: "Botanical Canopy Reception",
    spanClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Opulent Crystal Dinnerware",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
    category: "Corporate",
    title: "Symphony of Lights Lounge",
    spanClass: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1507504038482-76210db8834a?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Luxury Estate Chandeliers",
    spanClass: "md:col-span-1 md:row-span-1"
  }
];

export const PORTFOLIO_HIGHLIGHTS: PortfolioHighlight[] = [
  {
    id: "p1",
    title: "Ethereal Botanical Union",
    eventType: "Luxury Destination Wedding",
    location: "Llanogrande Hacienda, Antioquia",
    description: "A glass pavilion ceremony blanketed in 15,000 hanging white orchids, finished with crystal chandeliers and a bespoke reflecting pool aisle that made the couple appear to walk on water.",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p2",
    title: "Symphony of Lights Gala",
    eventType: "Corporate Annual Soirée",
    location: "Botanical Garden Pavilion, Medellín",
    description: "An immersive dining experience for 300 international guests, incorporating interactive light ceilings, sound-reactive projection mapping, and customized vertical green walls.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p3",
    title: "Midnight in Versailles",
    eventType: "Milestone Celebration",
    location: "Santa Elena Foothills Estate",
    description: "A dramatic evening reception capturing French royal opulence. Highlights included gilded vintage columns, custom-made lace drapes, 800 beeswax pillar candles, and a hand-carved crystal ice bar.",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p4",
    title: "Cascading Golden Sunset",
    eventType: "Private Mansion Wedding",
    location: "El Poblado Hills, Medellín",
    description: "A sunset cliffside reception overlooking the city lights. Adorned with warm glowing gold drapery, modern matte-black accents, and a custom suspended floral cloud hovering above the bridal table.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Victoria & Mateo",
    role: "Bride & Groom",
    quote: "Lottus Designers turned our Llanogrande wedding into an absolute masterpiece. Every guest felt they had stepped into an ethereal wonderland. Their attention to every single orchid, candle, and linen was awe-inspiring.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t2",
    name: "Alejandro Estrada",
    role: "VP of Experiences, Grupo Sura",
    quote: "The visual storytelling and spatial organization provided by Lottus Designers was world-class. Our annual summit gala was not only visually jaw-dropping but executed with flawless, white-glove precision.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t3",
    name: "Mariana & Carlos",
    role: "10th Anniversary Celebrants",
    quote: "We wanted a celebration that felt intimate, luxurious, and uniquely Medellin. The cascading custom greenery, warm amber lights, and flawless schedule created an unforgettable night. Working with them was pure luxury from day one.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Consultation",
    description: "An intimate, deep-dive session over Champagne where we listen to your dreams, clarify your aesthetic voice, and understand the scope of your celebration."
  },
  {
    number: "02",
    title: "Creative Concept",
    description: "We craft an immersive design proposal complete with detailed mood boards, color theories, spatial renderings, and hand-sketched floristry ideas."
  },
  {
    number: "03",
    title: "Design & Planning",
    description: "We assemble your bespoke team of elite vendors, procure custom drapery, design prototypes, and build a meticulous minute-by-minute execution flow."
  },
  {
    number: "04",
    title: "Event Execution",
    description: "Our dedicated designers and production crew manage the on-site build. We orchestrate lighting, set tables, place flowers, and execute every element to perfection."
  },
  {
    number: "05",
    title: "Celebration",
    description: "You step into a living work of art. While our team handles every coordination nuance behind the scenes, you focus entirely on living an extraordinary moment."
  }
];

export const INSTAGRAM_ITEMS = [
  {
    id: "i1",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "2,410",
    comments: "48"
  },
  {
    id: "i2",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "1,892",
    comments: "32"
  },
  {
    id: "i3",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "3,115",
    comments: "72"
  },
  {
    id: "i4",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "1,654",
    comments: "25"
  },
  {
    id: "i5",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "2,877",
    comments: "56"
  },
  {
    id: "i6",
    imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=400&h=400",
    likes: "4,021",
    comments: "91"
  }
];

export const STATS = [
  { value: "500+", label: "Events Designed" },
  { value: "250+", label: "Happy Couples" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" }
];

export const BRAND_STORY = {
  headline: "Designing Moments That Last Forever",
  paragraph1: "Based in the lush, vibrant valley of Medellín, Colombia, Lottus Designers is a world-class luxury event planning and spatial design studio. Founded on the belief that a great celebration is not merely planned, but artistically composed, we curate immersive environments that engage the senses and tell a deeply personal visual story.",
  paragraph2: "We weave together majestic floral design, sophisticated structural styling, dramatic custom lighting, and white-glove event production to orchestrate flawless experiences. From dramatic candlelit estate receptions in the mountains of Santa Elena to sprawling botanical glass-pavilions in Llanogrande, we deliver a stress-free journey resulting in timeless, magnificent moments.",
  specialties: ["Luxury Destination Weddings", "Immersive Corporate Galas", "High-End Private Celebrations", "Bespoke Floral Sculpting", "Atmospheric Event Production"]
};

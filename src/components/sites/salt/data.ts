export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_EMAIL = "hello@passthesalt.com";
export const INSTAGRAM_URL = "https://www.instagram.com/salt_losangeles/";
export const LINKEDIN_URL = "https://www.linkedin.com/company/salt-productions-llc/";

export type WorkItem = { title: string; href: string; image: string };

export const FEATURED_WORK: WorkItem[] = [
  { title: "Amazon A\u2019Maison 2025", href: "/work/amazon-amaison-2025/", image: "/sites/salt/images/amazon-amaison-2025-1024x1024.jpg" },
  { title: "Amazon OMR", href: "/work/amazon-omr/", image: "/sites/salt/images/amazon-omr-1024x1024.jpg" },
  { title: "lululemon Bottlerock", href: "/work/lululemon-bottlerock/", image: "/sites/salt/images/lululemon-bottlerock-1024x1024.jpg" },
  { title: "lululemon Glowup Studio", href: "/work/lululemon-glowup-studio/", image: "/sites/salt/images/lululemon-glowup-studio-listing-1024x1024.jpg" },
  { title: "Stranger Things Broadway", href: "/work/stranger-things-broadway/", image: "/sites/salt/images/strangerthings-listing-1024x1024.jpg" },
  { title: "Google Marketing Live", href: "/work/google-marketing-live/", image: "/sites/salt/images/google-marketing-live-1024x1024.jpg" },
  { title: "Service Now Knowledge", href: "/work/service-now-knowledge/", image: "/sites/salt/images/service-now-1024x1024.jpg" },
  { title: "75th Emmys Red Carpet", href: "/work/75th-emmys-red-carpet/", image: "/sites/salt/images/emmys-red-carpet-1024x1024.jpg" },
];

export type Award = { grade: string; title: string; event: string; logo: string };

export const AWARDS: Award[] = [
  { grade: "silver", title: "Best Use Of Technology", event: "Amazon Ads UnBoxed 2022", logo: "event-marketer" },
  { grade: "silver", title: "Best B-to-B Conference or Event", event: "Amazon Ads UnBoxed 2023", logo: "event-marketer" },
  { grade: "winner", title: "Best Conference or Convention", event: "Amazon Ads UnBoxed 2022", logo: "bizbash" },
  { grade: "winner", title: "Best Overall B2B Environment", event: "Amazon Port 2022", logo: "event-marketer" },
  { grade: "silver", title: "Best Overall B2B Event", event: "Amazon UnBoxed 2022", logo: "event-marketer" },
  { grade: "gold", title: "Best Virtual Event", event: "Amazon Devices & Services Fall 2022 Launch", logo: "event-marketer" },
  { grade: "silver", title: "B2B Excellence \u2013 Event or Experience", event: "A\u2019Maison 2024", logo: "drum" },
  { grade: "platinum", title: "B2B Event", event: "FOX Upfront 2024", logo: "muse" },
  { grade: "platinum", title: "Corporate Event", event: "FOX Upfront 2024", logo: "muse" },
  { grade: "platinum", title: "Event Other", event: "FOX Upfront 2024", logo: "muse" },
  { grade: "gold", title: "Experiential & Immersive \u2013 Brand Engagement Event", event: "A\u2019Masion at Cannes Lions 2024", logo: "muse" },
  { grade: "gold", title: "Experiential & Immersive \u2013 Corporate Event", event: "A\u2019Masion at Cannes Lions 2024", logo: "muse" },
  { grade: "gold", title: "Experiential & Immersive \u2013 Live Experiences", event: "A\u2019Masion at Cannes Lions 2024", logo: "muse" },
  { grade: "gold", title: "Experiential & Immersive \u2013 Interactive Outdoor Event", event: "A\u2019Masion at Cannes Lions 2024", logo: "muse" },
  { grade: "silver", title: "Best Outdoor Environment", event: "A\u2019Maison 2024", logo: "event-marketer" },
  { grade: "winner", title: "Best Corporate Event Concept", event: "Amazon Upfronts 2024", logo: "bizbash" },
];

export type Testimonial = { quote: string; attribution: string; image: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    image: "/sites/salt/images/lulu-testimonial-1024x1024.jpg",
    quote:
      "\u201CA first-of-its-kind training club for lululemon, which launched in New York\u2019s Soho district to coincide with Fashion Week. A twist on the conventional fitness space, the activation fused the energy of \u201980s and \u201990s workout culture with contemporary fitness aesthetics.\u201D",
    attribution: "\u2013John Smith, Curator",
  },
  {
    image: "/sites/salt/images/amazon-testimonial-1024x1024.jpg",
    quote:
      "\u201CWhile retail media juggernaut Amazon has long had a presence at the festival, it\u2019s back with a major installation, dubbed A\u2019Maison, around the corner from the Palais along the Port de Cannes.\u201D",
    attribution: "\u2013ADWEEK",
  },
  {
    image: "/sites/salt/images/fashionunited-testimonial-1024x1024.jpg",
    quote:
      "\u201CFeaturing a distinctive red carpet design that set the stage for the evening\u2019s fashion statements. Departing from the traditional red, the event showcased a silver carpet, providing a neutral backdrop that allowed the vibrant attire of attendees to stand out.\u201D",
    attribution: "\u2013FashionUnited",
  },
];

export const ANIMATED_WORDS = [
  "Fun",
  "Meaningful",
  "Human",
  "Collaborative",
  "Flexible",
  "Intentional",
  "Bold",
  "Inclusive",
  "Memorable",
];

export const FOOTER_COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Get In Touch",
    links: [
      { label: "Join Our Team", href: "/contact#work-with-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "The Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "The Team", href: "/about#team" },
      { label: "Culture", href: "/culture" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { label: "Instagram", href: INSTAGRAM_URL },
      { label: "LinkedIn", href: LINKEDIN_URL },
    ],
  },
];

export const AWARD_LOGO_SRC: Record<string, string> = {
  "event-marketer": "/sites/salt/images/event-marketer.png",
  bizbash: "/sites/salt/images/bizbash.png",
  drum: "/sites/salt/images/drum.png",
  muse: "/sites/salt/images/muse.png",
};
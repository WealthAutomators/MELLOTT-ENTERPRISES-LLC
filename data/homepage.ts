import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "BUILT FOR\nEVERYDAY LIVING.",
    description:
      "Useful products, smart upgrades and everyday essentials selected for the way you live.",
    ctaText: "Shop Everything",
    ctaLink: "/shop",
    secondaryCtaText: "Explore New Arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const heroGridSlugs = [
  "enamel-stockpot-8qt",
  "wall-monitor-light-bar",
  "trail-daypack-22l",
  "linen-drum-table-lamp",
] as const;

export const quickCategories = [
  {
    id: "home",
    name: "Home",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
    width: "wide" as const,
  },
  {
    id: "tech",
    name: "Tech",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
    width: "normal" as const,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    href: "/categories/home-kitchen",
    image: "/banners/featured.jpg",
    width: "normal" as const,
  },
  {
    id: "workspace",
    name: "Workspace",
    href: "/categories/office-supplies",
    image: "/categories/office-supplies.jpg",
    width: "narrow" as const,
  },
  {
    id: "outdoor",
    name: "Outdoor",
    href: "/categories/sports-outdoors",
    image: "/categories/sports-outdoors.jpg",
    width: "normal" as const,
  },
  {
    id: "beauty",
    name: "Beauty",
    href: "/categories/beauty",
    image: "/categories/beauty.jpg",
    width: "narrow" as const,
  },
  {
    id: "family",
    name: "Family",
    href: "/categories/toys-games",
    image: "/categories/toys-games.jpg",
    width: "normal" as const,
  },
  {
    id: "travel",
    name: "Travel",
    href: "/shop?search=travel",
    image: "/banners/about.jpg",
    width: "wide" as const,
  },
  {
    id: "pets",
    name: "Pets",
    href: "/categories/pet-supplies",
    image: "/categories/pet-supplies.jpg",
    width: "normal" as const,
  },
  {
    id: "wellness",
    name: "Wellness",
    href: "/categories/health-wellness",
    image: "/categories/health-wellness.jpg",
    width: "narrow" as const,
  },
];

export const shopByNeed = [
  {
    id: "home-easier",
    title: "Make Home Easier",
    description: "Tools and upgrades that simplify daily routines.",
    image: "/categories/home-kitchen.jpg",
    href: "/categories/home-kitchen",
  },
  {
    id: "work-smarter",
    title: "Work Smarter",
    description: "Desk essentials that keep focus sharp.",
    image: "/categories/office-supplies.jpg",
    href: "/categories/office-supplies",
  },
  {
    id: "get-organized",
    title: "Get Organized",
    description: "Storage and systems for calmer spaces.",
    image: "/categories/bathroom.jpg",
    href: "/shop?search=storage",
  },
  {
    id: "upgrade-tech",
    title: "Upgrade Your Tech",
    description: "Practical gadgets without the clutter.",
    image: "/categories/electronics.jpg",
    href: "/categories/electronics",
  },
  {
    id: "refresh-space",
    title: "Refresh Your Space",
    description: "Lighting and finishes that feel intentional.",
    image: "/banners/featured.jpg",
    href: "/shop?search=lamp",
  },
  {
    id: "get-outside",
    title: "Get Outside",
    description: "Gear ready for trails, parks, and weekends.",
    image: "/categories/sports-outdoors.jpg",
    href: "/categories/sports-outdoors",
  },
];

export const utilitySpotlight = {
  productSlug: "enamel-stockpot-8qt",
  headline: "UPGRADE THE EVERYDAY.",
  description:
    "Small changes can make everyday routines easier, cleaner and more enjoyable.",
  features: [
    "Even heat distribution",
    "Oven-safe to 500°F",
    "Easy-clean enamel",
    "Stay-cool handles",
  ],
};

export const whyMellott: Feature[] = [
  {
    id: "1",
    icon: "check",
    title: "Thoughtful Selection",
    description: "Every product is chosen for usefulness, build quality, and real daily value.",
  },
  {
    id: "2",
    icon: "tag",
    title: "Everyday Value",
    description: "Fair prices on essentials and upgrades you will actually use.",
  },
  {
    id: "3",
    icon: "cart",
    title: "Easy Shopping",
    description: "Clear navigation, fast search, and a checkout flow that stays simple.",
  },
  {
    id: "4",
    icon: "star",
    title: "Products Worth Keeping",
    description: "We favor durable designs over disposable trends.",
  },
];

export const features: Feature[] = whyMellott;

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageFeaturedSlugs = [
  "enamel-stockpot-8qt",
  "wall-monitor-light-bar",
  "trail-daypack-22l",
  "peptide-eye-cream-duo",
  "modular-cube-shelves",
  "automatic-pet-feeder",
  "compact-massage-gun",
  "wooden-marble-run",
] as const;

export const homepageDealsSlugs = [
  "portable-label-maker",
  "bath-towel-set",
  "dog-bed",
  "yoga-mat",
  "linen-drum-table-lamp",
  "teak-bath-stool",
] as const;

export const homepageNewArrivalSlugs = [
  "immersion-sous-vide",
  "kids-coding-robot-car",
  "waxed-canvas-belt-bag",
  "lawn-cornhole-set",
  "silicone-teether-set",
  "charcoal-odor-bags",
] as const;

export const homepageCollectionSlugs = [
  "enamel-stockpot-8qt",
  "wall-monitor-light-bar",
  "magnetic-car-vent-mount",
  "coffee-grinder",
  "trail-daypack-22l",
  "soft-plush-blanket",
  "accordion-file-organizer",
  "peptide-eye-cream-duo",
] as const;

export const homepageBestsellerSlugs = [
  "bath-towel-set",
  "dog-bed",
  "yoga-mat",
  "coffee-grinder",
  "enamel-stockpot-8qt",
  "wall-monitor-light-bar",
  "automatic-pet-feeder",
  "modular-cube-shelves",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Upgrade the Everyday",
  description: "Practical finds for home, work, and weekends — built to earn their keep.",
  buttonText: "Shop Deals",
  buttonLink: "/shop?sale=true",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "Built for Everyday Living.",
  description:
    "Mellott Enterprises LLC brings together useful products across home, tech, outdoors, and family life — curated for people who want dependable quality without the fuss.",
  checklist: [
    "Wide selection across 12+ categories",
    "Practical products at fair prices",
    "Fast, reliable shipping nationwide",
    "Support that actually helps",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Product Collection",
  description: "A structured mix of standouts and supporting finds from across the marketplace.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home-kitchen",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "KEEP THE GOOD FINDS COMING.",
  description: "New products, useful upgrades and deals worth knowing about.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

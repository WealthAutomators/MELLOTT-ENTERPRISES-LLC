import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Practical gadgets and everyday tech upgrades.",
    productCount: 2,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Cookware, storage, and tools that earn their counter space.",
    productCount: 4,
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Towels, seating, and bathroom essentials.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.jpg",
    description: "Learning toys that make curiosity hands-on.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet Supplies",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and care products for pets.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Skincare and personal care favorites.",
    productCount: 2,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports",
    image: "/categories/sports-outdoors.jpg",
    description: "Gear for fitness, trails, and outdoor days.",
    productCount: 3,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.jpg",
    description: "Workspace lighting and organization.",
    productCount: 3,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion",
    image: "/categories/fashion-accessories.jpg",
    description: "Everyday carry accessories with lasting materials.",
    productCount: 1,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.jpg",
    description: "Soft, practical products for little ones.",
    productCount: 2,
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.jpg",
    description: "Playsets for indoors and backyard fun.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health & Wellness",
    image: "/categories/health-wellness.jpg",
    description: "Recovery and wellness essentials for daily routines.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

import { HeroBanner } from "@/components/homepage/hero-banner";
import { QuickCategories } from "@/components/homepage/quick-categories";
import { FeaturedFinds } from "@/components/homepage/featured-finds";
import { UtilitySpotlight } from "@/components/homepage/utility-spotlight";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { ShopByNeed } from "@/components/homepage/shop-by-need";
import { ProductCollection } from "@/components/homepage/product-collection";
import { DealBoard } from "@/components/homepage/deal-board";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { WhyMellott } from "@/components/homepage/why-mellott";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <QuickCategories />
      <FeaturedFinds />
      <UtilitySpotlight />
      <NewArrivals />
      <ShopByNeed />
      <ProductCollection />
      <DealBoard />
      <CustomerReviews />
      <WhyMellott />
      <Newsletter />
    </>
  );
}
